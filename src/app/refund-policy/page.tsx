export default function Refund() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-brand-dark">Cancellation and Refund Policy</h1>
      <div className="space-y-4 text-gray-700">
        <p>Last updated: August 2026</p>
        <h2 className="text-xl font-semibold mt-4">Order Cancellations</h2>
        <p>Orders can only be cancelled within 1 hour of placement. Since our products are freshly baked and perishable, we cannot accept cancellations once the baking process has begun or the order has been dispatched.</p>
        <h2 className="text-xl font-semibold mt-4">Refunds</h2>
        <p>We offer refunds or replacements under the following conditions:</p>
        <ul className="list-disc pl-6">
          <li>The wrong item was delivered to you.</li>
          <li>The item was significantly damaged during transit.</li>
          <li>The item was spoiled or unfit for consumption upon delivery.</li>
        </ul>
        <p>To request a refund, please contact us within 2 hours of delivery with photographic evidence. Approved refunds will be processed back to your original payment method within 5-7 business days.</p>
      </div>
    </div>
  );
}
