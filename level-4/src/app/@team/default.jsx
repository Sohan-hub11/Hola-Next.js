import React from 'react'

function Default() {
  return (
    <main>
      <div>
        When navigating to /settings, the @sohan slot will render the settings page while maintaining the currently active page for the @team slot.
      </div>
      <div>
        On refresh, Next.js will render a default.js for @team and home.
      </div>
    </main>
  )
}

export default Default
