import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import Welcome from "../components/Welcome"

test("Verifica che il componente Welcome venga montato correttamente", () => {
  render(<Welcome />)

  const welcomeElement = screen.getByText(/Benvenuti in EpiBooks!/i)

  expect(welcomeElement).toBeInTheDocument()
})
