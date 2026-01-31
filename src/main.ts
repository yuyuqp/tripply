import './style.css'

const screens = ['landing', 'dashboard', 'profiles', 'logistics', 'itinerary'] as const

type Screen = (typeof screens)[number]

const screenSet = new Set<Screen>(screens)

const linkFor = (screen: Screen) => `?screen=${screen}#${screen}`

const navLinks: Array<{ screen: Screen; label: string }> = [
  { screen: 'landing', label: 'Home' },
  { screen: 'dashboard', label: 'Dashboard' },
  { screen: 'profiles', label: 'Profiles' },
  { screen: 'logistics', label: 'Logistics' },
  { screen: 'itinerary', label: 'Itinerary' }
]

const renderLanding = () => `
  <section class="hero">
    <div class="hero-content">
      <span class="eyebrow">Tripply travel planning</span>
      <h1>Plan trips that feel made for you.</h1>
      <p class="lead">
        Tripply is a travel planning and itinerary generation platform focused on deep personalization and
        real-time logistics awareness, so every trip stays effortless from kickoff to touchdown.
      </p>
      <div class="hero-actions">
        <a class="button primary" data-screen="dashboard" href="${linkFor('dashboard')}">
          Start free trial
        </a>
        <a class="button ghost" data-screen="itinerary" href="${linkFor('itinerary')}">
          View itinerary demo
        </a>
      </div>
      <p class="subtext">No account required. Jump straight into a trip prompt from the dashboard.</p>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-value">3 min</span>
          <span class="stat-label">to a first draft itinerary</span>
        </div>
        <div class="stat">
          <span class="stat-value">24/7</span>
          <span class="stat-label">logistics monitoring</span>
        </div>
        <div class="stat">
          <span class="stat-value">∞</span>
          <span class="stat-label">personalized profiles</span>
        </div>
      </div>
    </div>
    <div class="hero-card">
      <div class="hero-card-header">
        <span class="tag">Demo</span>
        <span class="tag ghost">Live logistics</span>
      </div>
      <h3>Tokyo culinary getaway</h3>
      <p>
        Your vegan-friendly trip is synced with weather updates, reservation windows, and nearby events.
        Changes are tracked automatically.
      </p>
      <div class="hero-card-grid">
        <div class="hero-card-item">
          <span class="label">Weather</span>
          <span class="value">68°F · Clear skies</span>
        </div>
        <div class="hero-card-item">
          <span class="label">Transit</span>
          <span class="value">No delays · JR Line</span>
        </div>
        <div class="hero-card-item">
          <span class="label">Dining</span>
          <span class="value">3 vegan spots on hold</span>
        </div>
        <div class="hero-card-item">
          <span class="label">Crowds</span>
          <span class="value">Low · Shibuya 5 PM</span>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="section-heading">
      <h2>Why Tripply is different</h2>
      <p>Two core strengths keep every itinerary realistic, delightful, and highly personalized.</p>
    </div>
    <div class="feature-grid">
      <div class="card">
        <h3>Personalization with travel profiles</h3>
        <p>
          Capture dietary needs, mobility preferences, and vibe settings. Switch between multiple profiles
          for solo, family, or work trips.
        </p>
        <ul class="list">
          <li>Food allergy support (no seafood, vegan, gluten-free)</li>
          <li>Preferred pace, budget, and activity intensity</li>
          <li>Reusable profiles for every traveler in your group</li>
        </ul>
      </div>
      <div class="card accent">
        <h3>Always-on logistics monitoring</h3>
        <p>
          Tripply monitors weather, traffic, transportation delays, restaurant availability, and nearby
          events before and during your trip.
        </p>
        <ul class="list">
          <li>Automatic alerts for disruptions or closures</li>
          <li>Real-time crowd and wait-time predictions</li>
          <li>Smart reroutes and alternative suggestions</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="section-heading">
      <h2>Jump to demo screens</h2>
      <p>Shareable URLs take you directly to each part of the prototype.</p>
    </div>
    <div class="demo-grid">
      <a class="demo-card" data-screen="dashboard" href="${linkFor('dashboard')}">
        <h3>Dashboard prompt</h3>
        <p>Start a new trip with a simple prompt and preview itinerary output.</p>
      </a>
      <a class="demo-card" data-screen="profiles" href="${linkFor('profiles')}">
        <h3>Travel profiles</h3>
        <p>Manage multiple traveler personas with preferences and constraints.</p>
      </a>
      <a class="demo-card" data-screen="logistics" href="${linkFor('logistics')}">
        <h3>Logistics command center</h3>
        <p>Monitor weather, traffic, and reservations in one place.</p>
      </a>
      <a class="demo-card" data-screen="itinerary" href="${linkFor('itinerary')}">
        <h3>Itinerary preview</h3>
        <p>See the timeline layout Tripply generates for travelers.</p>
      </a>
    </div>
  </section>
  <section class="cta">
    <div class="cta-card">
      <div>
        <h2>Ready to try Tripply?</h2>
        <p>Launch a free trial and begin planning immediately without creating an account.</p>
      </div>
      <a class="button primary" data-screen="dashboard" href="${linkFor('dashboard')}">
        Start free trial
      </a>
    </div>
  </section>
`

const renderDashboard = () => `
  <section class="screen-hero">
    <div>
      <span class="eyebrow">Dashboard demo</span>
      <h1>Start a new trip with a prompt</h1>
      <p class="lead">
        The fastest way to kick off a plan is to tell Tripply what you want. The prompt powers the first
        itinerary draft and instantly checks logistics.
      </p>
    </div>
    <div class="status-chip">Free trial · No account required</div>
  </section>
  <section class="section">
    <div class="card prompt-card">
      <div class="prompt-header">
        <h2>Create a trip prompt</h2>
        <span class="tag">Entry point</span>
      </div>
      <p>Describe your trip goals, constraints, and preferences to generate an itinerary instantly.</p>
      <textarea
        id="trip-prompt"
        rows="4"
        placeholder="e.g. Plan a 5-day Barcelona trip for two foodies who are vegan, love art, and prefer boutique hotels."
      ></textarea>
      <div class="prompt-actions">
        <button class="button primary" type="button">Generate itinerary</button>
        <button class="button ghost" type="button" data-sample="Weekend in Seattle with one museum day and coffee tastings">
          Use sample prompt
        </button>
      </div>
      <div class="chip-row">
        <button class="chip-button" type="button" data-sample="4-day Tokyo trip with no seafood and late-night bites">
          Tokyo · No seafood
        </button>
        <button class="chip-button" type="button" data-sample="8-day Italy road trip with relaxed pace and wine tastings">
          Italy road trip
        </button>
        <button class="chip-button" type="button" data-sample="3-day NYC trip for a family with a toddler and stroller-friendly routes">
          NYC family
        </button>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="grid-two">
      <div class="card">
        <h3>Itinerary snapshot</h3>
        <p class="muted">Drafted from your prompt and aligned with profile preferences.</p>
        <ul class="timeline">
          <li>
            <span class="time">Day 1</span>
            <div>
              <strong>Arrival + tapas crawl</strong>
              <span class="muted">Late check-in, vegetarian options flagged.</span>
            </div>
          </li>
          <li>
            <span class="time">Day 2</span>
            <div>
              <strong>Art district + beach sunset</strong>
              <span class="muted">Low crowd forecasts, 30-min buffer added.</span>
            </div>
          </li>
          <li>
            <span class="time">Day 3</span>
            <div>
              <strong>Market tour + cooking class</strong>
              <span class="muted">Allergy-safe vendor list included.</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="card">
        <h3>Live logistics signals</h3>
        <p class="muted">Tripply keeps an eye on the details while you plan.</p>
        <div class="status-list">
          <div class="status-item">
            <span class="status green"></span>
            <div>
              <strong>Weather window clear</strong>
              <span class="muted">Sunny, 65-72°F during arrival.</span>
            </div>
          </div>
          <div class="status-item">
            <span class="status yellow"></span>
            <div>
              <strong>Traffic surge expected</strong>
              <span class="muted">Adjust airport transfer time by +20 min.</span>
            </div>
          </div>
          <div class="status-item">
            <span class="status blue"></span>
            <div>
              <strong>Restaurant reservations held</strong>
              <span class="muted">3 vegan-friendly spots pending confirmation.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

const renderProfiles = () => `
  <section class="screen-hero">
    <div>
      <span class="eyebrow">Personalization demo</span>
      <h1>Travel profiles for every style</h1>
      <p class="lead">
        Save multiple traveler profiles so every itinerary is optimized for diet, pace, budget, and interests.
      </p>
    </div>
    <div class="status-chip">3 profiles active</div>
  </section>
  <section class="section">
    <div class="grid-three">
      <div class="card profile-card">
        <h3>Primary · Foodie Explorer</h3>
        <p class="muted">Vegetarian · boutique hotels · mid-budget</p>
        <div class="chip-row">
          <span class="tag">No seafood</span>
          <span class="tag">Art + markets</span>
        </div>
        <p>Prefers walkable neighborhoods and late-night food options.</p>
      </div>
      <div class="card profile-card">
        <h3>Family Trip</h3>
        <p class="muted">Two adults + toddler · stroller friendly</p>
        <div class="chip-row">
          <span class="tag">Low intensity</span>
          <span class="tag">Parks + museums</span>
        </div>
        <p>Extra nap blocks and backup indoor activities are prioritized.</p>
      </div>
      <div class="card profile-card">
        <h3>Wellness Retreat</h3>
        <p class="muted">Vegan · spa + yoga · flexible budget</p>
        <div class="chip-row">
          <span class="tag">Early mornings</span>
          <span class="tag">Scenic views</span>
        </div>
        <p>Schedules mindful sessions and local wellness experiences.</p>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="card">
      <h3>Profile preferences at a glance</h3>
      <div class="preferences-grid">
        <div>
          <span class="label">Dietary needs</span>
          <p>Vegan, vegetarian, no seafood, nut allergy</p>
        </div>
        <div>
          <span class="label">Pace</span>
          <p>Relaxed mornings, 2-3 anchor activities per day</p>
        </div>
        <div>
          <span class="label">Stay style</span>
          <p>Boutique hotels, walkable areas, quick transit access</p>
        </div>
      </div>
    </div>
  </section>
`

const renderLogistics = () => `
  <section class="screen-hero">
    <div>
      <span class="eyebrow">Logistics demo</span>
      <h1>Live trip monitoring command center</h1>
      <p class="lead">
        Tripply watches the moving parts of travel: weather, traffic, transit delays, crowding, and nearby events.
      </p>
    </div>
    <div class="status-chip">Next sync · 12 minutes</div>
  </section>
  <section class="section">
    <div class="grid-two">
      <div class="card">
        <h3>Today’s logistics watchlist</h3>
        <div class="status-list">
          <div class="status-item">
            <span class="status green"></span>
            <div>
              <strong>Weather stable</strong>
              <span class="muted">Clear skies through 6 PM.</span>
            </div>
          </div>
          <div class="status-item">
            <span class="status yellow"></span>
            <div>
              <strong>Transit delays</strong>
              <span class="muted">Metro Line 2 running +12 min late.</span>
            </div>
          </div>
          <div class="status-item">
            <span class="status red"></span>
            <div>
              <strong>Restaurant crowding</strong>
              <span class="muted">Popular ramen spot has 75-min wait.</span>
            </div>
          </div>
          <div class="status-item">
            <span class="status blue"></span>
            <div>
              <strong>Nearby event alert</strong>
              <span class="muted">Festival traffic near Old Town.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <h3>Suggested adjustments</h3>
        <ul class="list">
          <li>Swap lunch to a low-crowd vegan cafe 12 minutes away.</li>
          <li>Leave the hotel 15 minutes earlier for museum entry.</li>
          <li>Move rooftop dinner to 8:00 PM for clearer skies.</li>
          <li>Use rideshare instead of Metro Line 2 after 5 PM.</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="card">
      <h3>Logistics timeline</h3>
      <div class="timeline-grid">
        <div>
          <span class="time">8:00 AM</span>
          <p>Weather check complete · no rain expected.</p>
        </div>
        <div>
          <span class="time">10:15 AM</span>
          <p>Transit update · alternate subway route suggested.</p>
        </div>
        <div>
          <span class="time">1:30 PM</span>
          <p>Restaurant availability · tables opened for 6:30 PM.</p>
        </div>
      </div>
    </div>
  </section>
`

const renderItinerary = () => `
  <section class="screen-hero">
    <div>
      <span class="eyebrow">Itinerary demo</span>
      <h1>A timeline built from your preferences</h1>
      <p class="lead">
        Every schedule is arranged around traveler profiles, local conditions, and time to recharge.
      </p>
    </div>
    <div class="status-chip">Barcelona · 5 days</div>
  </section>
  <section class="section">
    <div class="itinerary-layout">
      <div class="card itinerary-map">
        <div class="map-header">
          <h3>Route overview</h3>
          <span class="tag">Map sync</span>
        </div>
        <div class="map-canvas" role="img" aria-label="Barcelona itinerary map with four day stops pinned.">
          <span class="map-pin pin-1"><span class="pin-label">1</span></span>
          <span class="map-pin pin-2"><span class="pin-label">2</span></span>
          <span class="map-pin pin-3"><span class="pin-label">3</span></span>
          <span class="map-pin pin-4"><span class="pin-label">4</span></span>
          <span class="map-route"></span>
        </div>
        <div class="map-legend">
          <div class="legend-item">
            <span class="legend-pin pin-1"></span>
            Gothic Quarter arrival
          </div>
          <div class="legend-item">
            <span class="legend-pin pin-2"></span>
            Eixample art loop
          </div>
          <div class="legend-item">
            <span class="legend-pin pin-3"></span>
            La Boqueria market
          </div>
          <div class="legend-item">
            <span class="legend-pin pin-4"></span>
            Costa Brava day trip
          </div>
        </div>
      </div>
      <div class="itinerary-grid">
        <div class="card">
          <h3>Day 1 · Arrival</h3>
          <ul class="agenda">
            <li>Hotel check-in + rooftop welcome tea</li>
            <li>Evening tapas crawl (vegan menu)</li>
            <li>Sunset walk at Barceloneta</li>
          </ul>
        </div>
        <div class="card">
          <h3>Day 2 · Art & design</h3>
          <ul class="agenda">
            <li>Gaudí architecture tour (low-crowd window)</li>
            <li>Picasso museum with timed entry</li>
            <li>Late afternoon gallery hop</li>
          </ul>
        </div>
        <div class="card">
          <h3>Day 3 · Local flavors</h3>
          <ul class="agenda">
            <li>Morning market visit + cooking class</li>
            <li>Siesta + spa break</li>
            <li>Rooftop dinner with reservations held</li>
          </ul>
        </div>
        <div class="card">
          <h3>Day 4 · Coastal reset</h3>
          <ul class="agenda">
            <li>Scenic train to coastal village</li>
            <li>Boat tour with low-wind conditions</li>
            <li>Sea-view dinner swap if crowds rise</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
`

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App container not found')
}

const getScreenFromUrl = (): Screen => {
  const params = new URLSearchParams(window.location.search)
  const screenParam = params.get('screen')
  const hashParam = window.location.hash.replace('#', '')
  const candidate = (screenParam || hashParam || '').toLowerCase()

  if (screenSet.has(candidate as Screen)) {
    return candidate as Screen
  }

  return 'landing'
}

const screenContent: Record<Screen, string> = {
  landing: renderLanding(),
  dashboard: renderDashboard(),
  profiles: renderProfiles(),
  logistics: renderLogistics(),
  itinerary: renderItinerary()
}

const navigate = (screen: Screen) => {
  const url = new URL(window.location.href)
  url.searchParams.set('screen', screen)
  url.hash = screen
  history.pushState({}, '', url)
  render()
}

const bindEvents = () => {
  app.querySelectorAll<HTMLElement>('[data-screen]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      const target = element.getAttribute('data-screen') as Screen | null
      if (target && screenSet.has(target)) {
        navigate(target)
      }
    })
  })

  const promptField = app.querySelector<HTMLTextAreaElement>('#trip-prompt')
  if (promptField) {
    app.querySelectorAll<HTMLButtonElement>('[data-sample]').forEach((button) => {
      button.addEventListener('click', () => {
        const sample = button.getAttribute('data-sample')
        if (sample) {
          promptField.value = sample
          promptField.focus()
        }
      })
    })
  }
}

const render = () => {
  const active = getScreenFromUrl()
  const navHtml = navLinks
    .map((link) => {
      const isActive = link.screen === active
      const activeClass = isActive ? 'nav-link active' : 'nav-link'
      const ariaCurrent = isActive ? 'aria-current="page"' : ''
      return `<a class="${activeClass}" ${ariaCurrent} data-screen="${link.screen}" href="${linkFor(link.screen)}">${link.label}</a>`
    })
    .join('')

  app.innerHTML = `
    <div class="app">
      <header class="nav">
        <div class="container nav-inner">
          <a class="brand" data-screen="landing" href="${linkFor('landing')}">
            <span class="brand-dot"></span>
            Tripply
          </a>
          <nav class="nav-links">
            ${navHtml}
          </nav>
          <a class="button primary nav-cta" data-screen="dashboard" href="${linkFor('dashboard')}">
            Start free trial
          </a>
        </div>
      </header>
      <main class="container">
        ${screenContent[active]}
      </main>
      <footer class="footer">
        <div class="container footer-inner">
          <div>
            <strong>Tripply prototype</strong>
            <p class="muted">
              Shareable demo URLs: ${linkFor('dashboard')}, ${linkFor('profiles')}, ${linkFor('logistics')},
              ${linkFor('itinerary')}.
            </p>
          </div>
          <div class="footer-links">
            <a data-screen="landing" href="${linkFor('landing')}">Home</a>
            <a data-screen="dashboard" href="${linkFor('dashboard')}">Free trial</a>
            <a data-screen="profiles" href="${linkFor('profiles')}">Profiles</a>
          </div>
        </div>
      </footer>
    </div>
  `

  bindEvents()
}

window.addEventListener('popstate', render)
window.addEventListener('hashchange', render)

render()
