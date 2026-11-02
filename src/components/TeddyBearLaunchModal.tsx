'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const WHATSAPP_NUMBER = '916383645415';
const WHATSAPP_MESSAGE = encodeURIComponent(
  '👋 Hello The Rolling Oven! I saw your new 3D Teddy Bear Mousse launch (Belgian Choco Drizzle, Matcha Bear, Molten Truffle & Vanilla Cloud) and would love to order!'
);
const STORAGE_KEY = 'tro_teddy_mousse_promo_seen_v1';

export default function TeddyBearLaunchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore storage errors in private browsing
    }
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    // Track GA4 promotional impression
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'view_promotion', {
        promotion_id: 'teddy_mousse_launch_2026',
        promotion_name: 'Teddy Bear Mousse New Launch Poster',
        creative_name: '3D Sleeping Teddy Bear Mousse',
        creative_slot: 'homepage_popup',
      });
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);

    // Expose programmatic trigger so any CTA or banner can re-open it
    if (typeof window !== 'undefined') {
      (window as unknown as { openTeddyModal?: () => void }).openTeddyModal = () => {
        openModal();
      };
    }

    try {
      const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
      if (!alreadySeen) {
        // Show after brief entrance delay for smooth page load experience
        const timer = setTimeout(() => {
          openModal();
        }, 850);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback
      const timer = setTimeout(() => {
        openModal();
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [openModal]);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    // GA4 conversion tracking for WhatsApp click
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'select_promotion', {
        promotion_id: 'teddy_mousse_launch_2026',
        promotion_name: 'Teddy Bear Mousse New Launch Poster',
        creative_name: '3D Sleeping Teddy Bear Mousse',
        creative_slot: 'homepage_popup_whatsapp',
      });
    }

    const isMobile =
      typeof navigator !== 'undefined' &&
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const targetUrl = isMobile
      ? `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_MESSAGE}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_MESSAGE}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  if (!isMounted) return null;

  return (
    <div
      className={`teddy-modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="teddy-modal-title"
      aria-hidden={!isOpen}
    >
      <div className="teddy-modal-container" data-lenis-prevent="true">
        {/* Floating Close Button */}
        <button
          type="button"
          className="teddy-modal-close-btn"
          onClick={closeModal}
          aria-label="Close Teddy Bear Mousse Announcement"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Live Badge */}
        <div className="teddy-modal-badge">
          <span>Viral 3D Launch • Fresh Today</span>
        </div>

        {/* Poster Image */}
        <div className="teddy-poster-wrapper">
          <Image
            src="/images/teddy-bear-mousse-launch-poster.jpg"
            alt="The Rolling Oven - 3D Teddy Bear Mousse New Launch Poster"
            width={720}
            height={900}
            priority
            className="teddy-poster-image"
          />
        </div>

        {/* Footer Actions */}
        <div className="teddy-modal-footer">
          <p id="teddy-modal-title" className="teddy-modal-tagline">
            Wake up a sleepy chocolate bear 🧸🍫
          </p>

          <div className="teddy-modal-actions">
            <a
              href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_MESSAGE}`}
              onClick={handleWhatsAppClick}
              className="teddy-btn-primary"
              aria-label="Order Teddy Bear Mousse on WhatsApp"
            >
              <span>Order on WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

            <a
              href="/category/mousse"
              onClick={closeModal}
              className="teddy-btn-secondary"
              aria-label="View Teddy Bear Mousse Menu"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
