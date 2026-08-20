import { z } from 'zod';

export const orderSchema = z.object({
  customer_name: z.string().min(1, 'Name is required').max(100),
  customer_email: z.string().email('Invalid email').max(150),
  customer_phone: z.string().min(5, 'Invalid phone number').max(20),
  delivery_address: z.string().min(3, 'Delivery address is required').max(300),
  pincode: z.string().min(4, 'Pincode is required').max(10),
  special_instructions: z.string().max(500).optional().nullable(),
  order_type: z.string().optional(),
  items: z.array(z.any()).min(1, 'Order must contain at least one item'),
  total_amount: z.string().or(z.number()),
  utm_source: z.string().optional().nullable(),
  utm_medium: z.string().optional().nullable(),
  utm_campaign: z.string().optional().nullable(),
  b_website: z.string().optional().nullable(), // Anti-spam Honeypot
});

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email').max(150),
  phone: z.string().min(5, 'Invalid phone number').max(20),
  product: z.string().max(100),
  message: z.string().max(1000).optional().nullable(),
  b_website: z.string().optional().nullable(), // Anti-spam Honeypot
});

export const feedbackSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  rating: z.number().int().min(1).max(5),
  message: z.string().min(1, 'Message is required').max(1000),
});
