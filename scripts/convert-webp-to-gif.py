import os
import sys
from PIL import Image, ImageSequence

def convert_webp_to_gif(webp_path, output_gif_path, max_width=960, step=3):
    print(f"Opening: {webp_path}")
    im = Image.open(webp_path)
    total_frames = getattr(im, 'n_frames', 1)
    print(f"Total frames: {total_frames}, original size: {im.size}")

    width, height = im.size
    if width > max_width:
        new_width = max_width
        new_height = int(height * (max_width / width))
    else:
        new_width, new_height = width, height

    frames = []
    durations = []

    # Get duration per frame (default 50ms)
    frame_idx = 0
    for frame in ImageSequence.Iterator(im):
        if frame_idx % step == 0:
            duration = frame.info.get('duration', 50) * step
            # Convert to RGB then quantize for optimal palette and crisp quality
            rgb_frame = frame.convert('RGB').resize((new_width, new_height), Image.Resampling.LANCZOS)
            # Convert to adaptive 256-color palette
            quantized = rgb_frame.quantize(colors=128, method=Image.Quantize.FASTOCTREE)
            frames.append(quantized)
            durations.append(duration)
        frame_idx += 1

    print(f"Extracted {len(frames)} frames. Saving optimized GIF...")
    if frames:
        frames[0].save(
            output_gif_path,
            save_all=True,
            append_images=frames[1:],
            optimize=True,
            duration=durations,
            loop=0
        )
        file_size_mb = os.path.getsize(output_gif_path) / (1024 * 1024)
        print(f"Successfully generated: {output_gif_path} ({file_size_mb:.2f} MB)")

if __name__ == '__main__':
    src = r"C:\Users\sugan\Downloads\the-rolling-oven-linkedin-demo.webp"
    dest = r"C:\Users\sugan\Downloads\the-rolling-oven-linkedin.gif"
    convert_webp_to_gif(src, dest, max_width=800, step=3)
