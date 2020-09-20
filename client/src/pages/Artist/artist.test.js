import React from 'react'
import { render } from '@testing-library/react'
import Artist from './index'

test('should render without crashing', async () => {
    const props = { location: { pathname: '/artists/760' } }
    const { baseElement } = render(<Artist {...props} />)
    expect(baseElement).toBeDefined()
})
