import React from 'react';
import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const SacredPrintsProject = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Sacred Prints Gallery</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          Faith-Inspired E-Commerce Platform with Charitable Giving
        </p>
        <div className="flex gap-4 mb-4">
          <a href="https://sacred-prints.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition">
            Visit Site
          </a>
          <a href="https://github.com/lddorse/sacred-prints" target="_blank" rel="noopener noreferrer" className="bg-gray-700 dark:bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-700 transition">
            View Code
          </a>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-8 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Project Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Sacred Prints is a faith-based e-commerce platform for digital art prints, built for an independent artist 
          who creates inspirational religious artwork. The site enables online sales with a unique charitable mission: 
          <strong> 50% of all profits are donated to churches, food banks, shelters, and mothers in crisis.</strong>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The platform demonstrates full-stack web development capabilities, integrating Google Sheets as a dynamic 
          CMS, Stripe for secure payment processing, and serverless functions for backend logic—all deployed on Vercel 
          with automatic updates when content changes.
        </p>
      </section>

      {/* The Challenge */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">The Challenge</h2>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The client needed an affordable, easy-to-manage e-commerce solution without the complexity or monthly costs 
            of platforms like Shopify or WooCommerce. Key requirements included:
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Non-technical content management:</strong> Client needed to update products, prices, and descriptions without coding</li>
            <li><strong>Multiple product variations:</strong> Same artwork available in different sizes with different pricing</li>
            <li><strong>Secure payment processing:</strong> Professional checkout experience with Stripe integration</li>
            <li><strong>Zero monthly hosting fees:</strong> Budget-conscious approach for a charitable business model</li>
            <li><strong>Mobile-responsive design:</strong> Clean, faith-focused aesthetic that works on all devices</li>
            <li><strong>Easy updates:</strong> Ability to add/remove products or update content instantly</li>
          </ul>
        </div>
      </section>

      {/* Technical Solution */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Technical Solution</h2>
        
        <div className="space-y-6">
          {/* Architecture */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Architecture Overview</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-200 dark:border-gray-600">
              <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`Frontend (Vanilla HTML/CSS/JS)
    ↓
Google Sheets API (Product Data/CMS)
    ↓
Serverless Functions (Vercel)
    ↓
Stripe API (Payment Processing)
    ↓
Email Confirmation & Order Fulfillment`}
              </pre>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              This serverless architecture eliminates hosting costs, provides automatic scaling, and allows non-technical 
              content updates through Google Sheets—a familiar interface for the client.
            </p>
          </div>

          {/* Google Sheets as CMS */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h4 className="text-lg font-semibold mb-2 flex items-center text-gray-900 dark:text-gray-100">
              <span className="bg-green-500 text-white px-3 py-1 rounded mr-3 text-sm">CMS</span>
              Google Sheets as Dynamic Content Management System
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Instead of a traditional database, product data is stored in Google Sheets and fetched dynamically via the published CSV endpoint.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Sheet Structure:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>ID, Title, Size, Description</li>
                  <li>Price, Image URL, Availability flag</li>
                  <li>Multiple rows for size variations</li>
                  <li>Separate "About" sheet for bio content</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Benefits:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>No database setup or maintenance</li>
                  <li>Client can edit content like Excel</li>
                  <li>Changes reflect immediately on site</li>
                  <li>Version history built into Google Sheets</li>
                  <li>Collaborative editing if needed</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Implementation:</strong> JavaScript fetches CSV data, parses it, groups products by title 
                (to handle size variations), and dynamically generates the gallery with size selectors and pricing.
              </p>
            </div>
          </div>

          {/* E-commerce Features */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h4 className="text-lg font-semibold mb-2 flex items-center text-gray-900 dark:text-gray-100">
              <span className="bg-purple-500 text-white px-3 py-1 rounded mr-3 text-sm">CART</span>
              Shopping Cart & Checkout System
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Client-side shopping cart with Stripe Checkout integration for secure payment processing
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Cart Features:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Sidebar cart with real-time updates</li>
                  <li>Quantity management per item</li>
                  <li>Size selection per product</li>
                  <li>Live price calculations</li>
                  <li>Persistent cart state (localStorage)</li>
                  <li>Animated add-to-cart feedback</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Checkout Process:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Serverless function creates Stripe session</li>
                  <li>Redirects to Stripe-hosted checkout</li>
                  <li>PCI-compliant payment handling</li>
                  <li>Automatic success page redirect</li>
                  <li>Email confirmation to customer</li>
                  <li>Order details to fulfillment email</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stripe Integration */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h4 className="text-lg font-semibold mb-2 flex items-center text-gray-900 dark:text-gray-100">
              <span className="bg-indigo-500 text-white px-3 py-1 rounded mr-3 text-sm">PAYMENTS</span>
              Stripe Payment Integration
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Serverless API endpoint handles checkout session creation and communicates with Stripe
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-3 border border-gray-200 dark:border-gray-600">
              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">API Flow:</p>
              <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
{`POST /api/create-checkout
    ↓
Validate cart items & calculate total
    ↓
Create Stripe Checkout Session
    ↓
Return session URL to client
    ↓
Redirect to Stripe-hosted checkout
    ↓
Payment processing (handled by Stripe)
    ↓
Redirect to success page with confirmation`}
              </pre>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-3 text-sm">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Security:</strong> All payment data handled by Stripe's PCI-compliant infrastructure. 
                API keys secured as environment variables. No sensitive data stored on the client side.
              </p>
            </div>
          </div>

          {/* Frontend Implementation */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Frontend Architecture</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Single-page application built with vanilla JavaScript for lightweight performance
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>No framework overhead:</strong> Pure HTML/CSS/JS keeps page load under 50KB</li>
              <li><strong>Dynamic rendering:</strong> Gallery and about page generated from Sheets data</li>
              <li><strong>Smooth animations:</strong> CSS transitions for cart, navigation, image modals</li>
              <li><strong>Responsive design:</strong> Mobile-first approach with breakpoints for tablets/desktop</li>
              <li><strong>Image optimization:</strong> Lazy loading and modal view for product images</li>
              <li><strong>Accessibility:</strong> Keyboard navigation, semantic HTML, ARIA labels</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">🛒 E-Commerce</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Dynamic product catalog from Google Sheets</li>
              <li>Size variations with individual pricing</li>
              <li>Real-time cart management</li>
              <li>Stripe Checkout integration</li>
              <li>Order confirmation emails</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">📊 Content Management</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Google Sheets as headless CMS</li>
              <li>Non-technical product updates</li>
              <li>Dynamic About page content</li>
              <li>Image URL management</li>
              <li>Instant content publishing</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-400">🎨 User Experience</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Clean, faith-focused design aesthetic</li>
              <li>Smooth scroll and navigation animations</li>
              <li>Image modal for product previews</li>
              <li>Mobile-responsive layout</li>
              <li>Loading states and visual feedback</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-400">⚡ Performance</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Serverless deployment (Vercel)</li>
              <li>Zero monthly hosting costs</li>
              <li>Automatic HTTPS and CDN</li>
              <li>Fast page load (&lt;50KB initial)</li>
              <li>Scalable architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Technical Stack</h2>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Frontend</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• HTML5 / CSS3</li>
                <li>• Vanilla JavaScript (ES6+)</li>
                <li>• CSS Grid & Flexbox</li>
                <li>• Responsive Design</li>
                <li>• CSS Animations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Backend & APIs</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Vercel Serverless Functions</li>
                <li>• Node.js</li>
                <li>• Stripe API (Checkout)</li>
                <li>• Google Sheets API</li>
                <li>• RESTful API design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Infrastructure</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Vercel (Hosting & CDN)</li>
                <li>• GitHub (Version Control)</li>
                <li>• Continuous Deployment</li>
                <li>• Environment Variables</li>
                <li>• Custom Domain (DNS)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Skills Demonstrated</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-400">Web Development</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Responsive web design</li>
              <li>Single-page application architecture</li>
              <li>State management (cart, UI)</li>
              <li>API integration (Stripe, Sheets)</li>
              <li>Asynchronous JavaScript (Fetch API)</li>
              <li>DOM manipulation & event handling</li>
              <li>CSS animations & transitions</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">Backend & Integration</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Serverless function development</li>
              <li>RESTful API design</li>
              <li>Payment gateway integration (Stripe)</li>
              <li>Third-party API consumption</li>
              <li>Environment variable management</li>
              <li>Error handling & validation</li>
              <li>CORS and security headers</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold mb-3 text-purple-700 dark:text-purple-400">DevOps & Deployment</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Git version control</li>
              <li>CI/CD with Vercel</li>
              <li>Serverless architecture</li>
              <li>Environment configuration</li>
              <li>Custom domain setup</li>
              <li>Performance optimization</li>
              <li>Cost-effective hosting solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Business Impact</h2>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Cost Savings</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>$0/month hosting:</strong> Vercel free tier with excellent performance</li>
                <li><strong>No CMS fees:</strong> Google Sheets replaces $20-50/month CMS platforms</li>
                <li><strong>Minimal Stripe fees:</strong> 2.9% + $0.30 per transaction (industry standard)</li>
                <li><strong>No maintenance costs:</strong> Serverless eliminates server upkeep</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Client Empowerment</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Self-service updates:</strong> Client manages products independently</li>
                <li><strong>Familiar interface:</strong> Google Sheets requires no training</li>
                <li><strong>Instant publishing:</strong> Changes live within seconds</li>
                <li><strong>Scalable solution:</strong> Can grow with business needs</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-4 mt-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Charitable Impact:</strong> By minimizing overhead costs, more of each sale goes to charity. 
              The platform enables the client's mission to donate 50% of profits to churches, food banks, shelters, 
              and mothers in crisis—turning art into meaningful community support.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Challenges & Solutions</h2>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">1. Product Size Variations</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Challenge:</strong> Same artwork in multiple sizes with different pricing<br/>
                <strong>Solution:</strong> Grouped products by title in JavaScript, dynamically generated size 
                selectors, and updated pricing based on selected size. This allows efficient data structure in 
                Sheets (one row per size) while presenting clean UI to customers.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">2. Non-Technical Content Management</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Challenge:</strong> Client needed to update products without coding knowledge<br/>
                <strong>Solution:</strong> Leveraged Google Sheets as a familiar CMS. Published sheet as CSV, 
                fetch on page load, parse and render dynamically. Client updates cells like any spreadsheet, 
                changes reflect immediately on site refresh.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">3. Secure Payment Processing</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Challenge:</strong> PCI compliance and secure checkout without payment processor fees<br/>
                <strong>Solution:</strong> Integrated Stripe Checkout (hosted payment page), which handles all 
                compliance. Serverless function creates checkout session, Stripe handles card data, site receives 
                confirmation. No sensitive data touches our servers.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">4. Zero-Cost Hosting</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Challenge:</strong> Minimize overhead to maximize charitable donations<br/>
                <strong>Solution:</strong> Vercel's free tier provides unlimited bandwidth, automatic HTTPS, 
                global CDN, and serverless functions. GitHub integration enables automatic deployments on push. 
                Result: Professional hosting at $0/month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Potential Future Enhancements</h2>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Order Management Dashboard:</strong> Admin interface to view orders, track fulfillment status</li>
            <li><strong>Customer Accounts:</strong> User login for order history, saved addresses, wishlists</li>
            <li><strong>Print-on-Demand Integration:</strong> Automatic order fulfillment via Printful or Printify API</li>
            <li><strong>Email Marketing:</strong> Newsletter signup, abandoned cart recovery, promotional campaigns</li>
            <li><strong>Analytics Integration:</strong> Google Analytics for traffic analysis, conversion tracking</li>
            <li><strong>Product Reviews:</strong> Customer testimonials and ratings system</li>
            <li><strong>Gift Card System:</strong> Digital gift cards for charitable gifting</li>
            <li><strong>Multi-language Support:</strong> Internationalization for broader reach</li>
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg border-2 border-blue-200 dark:border-blue-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Sacred Prints demonstrates how modern web technologies can create professional e-commerce solutions without 
          the complexity or cost of traditional platforms. By combining serverless architecture, creative API integration, 
          and thoughtful UX design, the project delivers a robust shopping experience while keeping overhead minimal—allowing 
          more revenue to support charitable causes.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          This project showcases full-stack development skills, API integration expertise, and the ability to deliver 
          business value through technical innovation. The solution empowers the client to run an independent online 
          business while fulfilling their mission of supporting communities in need.
        </p>
      </section>

      {/* Contact */}
      <div className="text-center bg-gray-100 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Questions about this project? Contact me at{' '}
          <a href="mailto:lddorse@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
            lddorse@gmail.com
          </a>
        </p>
      </div>
    </FixedCardLayout>
  );
};

export default SacredPrintsProject;
