import React from 'react'

export default function MarketPlace() {
  return (
    <div className="flex space-x-60">
      <div>
        <h3>Talent Marketplace™</h3>
        <p className="text-gray-700">
          Learn about working with talent or explore <br />
          your specific hiring needs.
        </p>

        <a href="" className="text-blue-600">
          Learn more
        </a>
      </div>
      <div className="pt-14">
        <a href="" className="block pt-5">
          Development & IT
        </a>
        <a href="" className="block pt-5">
          Design & Creative
        </a>
        <a href="" className="block pt-5">
          Sales & Marketing
        </a>
        <a href="" className="block pt-5">
          Writing & Translation
        </a>
        <a href="" className="block pt-5">
          Admin & Customer Support
        </a>
        <a href="" className="block pt-5">
          Finance & Accounting
        </a>
        <a href="" className="block pt-5">
          HR & Training
        </a>
        <a href="" className="block pt-5">
          Legal
        </a>
        <a href="" className="block pt-5">
          Engineering & Architecture
        </a>
        <a href="" className="block pt-5">
          See all specializations
        </a>
      </div>
    </div>
  );
}
