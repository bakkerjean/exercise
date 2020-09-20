import React from 'react'
import { render } from '@testing-library/react'
import Artists from './index'
import { act } from 'react-dom/test-utils'

function mockSearch(data) {
    return jest.spyOn(window, 'fetch')
        .mockResolvedValue(new Response(JSON.stringify(data)))
}

// todo: fix weird 'unmounted component error' in test console

test('should render without crashing', async () => {
    const { baseElement } = render(<Artists />)
    expect(baseElement).toBeDefined()
})

test('should have Artists as title', async () => {
    const { findByText } = render(<Artists />)
    await findByText('Artists')
})

test('when there are artists the artists should be shows in the list', async () => {
    const { findByText } = render(<Artists />)
    const artists = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
    act(() => {
        mockSearch(artists)
    })
    await findByText('"Weird Al" Yankovic')
})
