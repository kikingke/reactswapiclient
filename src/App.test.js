import { render, screen } from '@testing-library/react'
import Main from './components/Main'

test('renders people from API', () => {
    render(<Main />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
