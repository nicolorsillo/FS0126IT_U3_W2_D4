import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import AllTheBooks from "../components/AllTheBooks"
import fantasy from "../data/fantasy.json"

describe("Test sul componente AllTheBooks", () => {
  it("dovrebbe mostrare esattamente lo stesso numero di card rispetto al file JSON", () => {
    render(<AllTheBooks />)

    const bookCards = screen.queryAllByRole("img")

    expect(bookCards).toHaveLength(fantasy.length)
  })
  it("le immagini delle copertine dovrebbero avere src corretto", () => {
    render(<AllTheBooks />)
    const allImages = screen.getAllByRole("img")

    allImages.forEach((img, index) => {
      expect(img).toHaveAttribute("src", fantasy[index].img)
    })
  })
})
