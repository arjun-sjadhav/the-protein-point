import React, { useState } from 'react';
import { SUBSCRIPTION_PLANS } from '../data/menuData';
import { WHATSAPP_NUMBER } from '../data/businessData';
import { IconFlame, IconDumbbell, IconWhatsApp, IconArrowRight, IconCalendar } from './Icons';

export const Subscriptions = () => {
  const [selectedBowlId, setSelectedBowlId] = useState(SUBSCRIPTION_PLANS[0].id);

  const activePlan =
    SUBSCRIPTION_PLANS.find((p) => p.id === selectedBowlId) || SUBSCRIPTION_PLANS[0];

  const handleSubscribeWhatsApp = (tier) => {
    const text = encodeURIComponent(
      `*New Subscription Inquiry - The Protein Point* 🥗\n\n` +
      `Hi! I would like to subscribe to the *${tier.duration} ${activePlan.bowlName} Plan* for ₹${tier.price}.\n` +
      `🥣 *Item:* ${activePlan.bowlName} (${activePlan.calories}, ${activePlan.protein})\n` +
      `📅 *Duration:* ${tier.duration}\n` +
      `💰 *Special Price:* ₹${tier.price} (Saving ₹${tier.savings})\n\n` +
      `Please let me know the daily pickup schedule and how to get started at Anand Nagar!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="subscriptions" className="section-padding subscriptions-section" aria-label="Subscription Saving Plans">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconCalendar className="w-4 h-4" />
            Daily Health Membership
          </span>
          <h2 className="section-title">Subscription Saving Plans</h2>
          <p className="section-subtitle">
            Commit to a healthier daily routine and save up to <strong>₹771/month</strong>. Freshly made high-protein bowls ready for your morning or pre/post workout schedule.
          </p>
        </div>

        {/* Clean Segmented Control Switch */}
        <div className="subscription-segmented-control" role="tablist" aria-label="Choose bowl subscription">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <button
              key={plan.id}
              type="button"
              role="tab"
              aria-selected={selectedBowlId === plan.id}
              className={`segmented-tab-btn ${selectedBowlId === plan.id ? 'active' : ''}`}
              onClick={() => setSelectedBowlId(plan.id)}
            >
              <span className="seg-tab-name">{plan.bowlName}</span>
              <span className="seg-tab-badges">
                <span>{plan.calories}</span> • <span>{plan.protein}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Active Plan Header Banner */}
        <div className="subscription-active-summary">
          <div className="sub-summary-img-wrap">
            <img
              src={activePlan.image}
              alt={activePlan.bowlName}
              className="sub-summary-img"
              loading="lazy"
            />
          </div>
          <div className="sub-summary-info">
            <div className="sub-summary-tags">
              <span className="badge-pill badge-cal">
                <IconFlame className="w-3.5 h-3.5" />
                {activePlan.calories}
              </span>
              <span className="badge-pill badge-prot">
                <IconDumbbell className="w-3.5 h-3.5" />
                {activePlan.protein}
              </span>
              <span className="badge-pill badge-neutral">
                Regular Price: ₹{activePlan.dailyRate}/bowl
              </span>
            </div>
            <h3 className="sub-summary-title">{activePlan.bowlName} Daily Habit</h3>
            <p className="sub-summary-desc">
              Your hassle-free daily nutrition delivered fresh. Loaded with whole oats or premium crunchy muesli, pure honey, seeds, and fresh fruits. Ready in 5 minutes!
            </p>
          </div>
        </div>

        {/* 7 / 15 / 30 Days Tiers Grid */}
        <div className="subscription-tiers-grid">
          {activePlan.tiers.map((tier, idx) => {
            const isBestValue = tier.duration === '30 Days';

            return (
              <div
                key={idx}
                className={`subscription-tier-card ${tier.popular ? 'popular' : ''} ${
                  isBestValue ? 'best-value' : ''
                }`}
              >
                {tier.popular && <span className="tier-badge-popular">⭐ Most Popular</span>}
                {isBestValue && <span className="tier-badge-value">🏆 Best Value</span>}

                <div className="tier-header">
                  <h4 className="tier-duration">{tier.duration}</h4>
                  <p className="tier-tagline">
                    {tier.duration === '7 Days'
                      ? 'Weekly starter habit'
                      : tier.duration === '15 Days'
                      ? 'Consistent fitness habit'
                      : 'Complete monthly transformation'}
                  </p>
                </div>

                <div className="tier-pricing">
                  <div className="tier-price-row">
                    <span className="tier-curr">₹</span>
                    <span className="tier-amount">{tier.price}</span>
                  </div>
                  <div className="tier-original-strike">
                    Regular: <s>₹{tier.originalPrice}</s>
                  </div>
                  <div className="tier-savings-pill">
                    🎉 Save ₹{tier.savings}
                  </div>
                </div>

                <ul className="tier-features-list">
                  <li>✓ Daily fresh 5-minute stall pickup</li>
                  <li>✓ High protein & clean natural energy</li>
                  <li>✓ 100% raw honey & organic jaggery</li>
                  <li>✓ Custom taste adjustments (free)</li>
                </ul>

                <button
                  type="button"
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-outline-primary'} btn-full`}
                  onClick={() => handleSubscribeWhatsApp(tier)}
                  aria-label={`Join ${tier.duration} plan on WhatsApp for ₹${tier.price}`}
                >
                  <IconWhatsApp className="w-4 h-4" />
                  <span>Join on WhatsApp</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="subscription-note-strip">
          <p>
            💡 <em>Need custom pickup timing or personalized diet adjustments? Message us directly on WhatsApp to customize your plan.</em>
          </p>
        </div>
      </div>
    </section>
  );
};
