
import { describe, it, expect, vi } from "vitest";
import { par } from "./num_par.js";


describe("num_par", () => {
    it("Deve informar que o número é par", () => {
        const consoleSpy = vi.spyOn(console, "log");

        par(10);

        expect(consoleSpy).toHaveBeenCalledWith(
            "O número é par!"
        );

        consoleSpy.mockRestore();
    });

    it("Deve informar que o número é ímpar", () => {
        const consoleSpy = vi.spyOn(console, "log");

        par(7);

        expect(consoleSpy).toHaveBeenCalledWith(
            "o número é impar!"
        );

        consoleSpy.mockRestore();
    });
});
