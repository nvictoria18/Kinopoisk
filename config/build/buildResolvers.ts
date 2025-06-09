import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export const buildResolvers = ({ paths }: BuildOptions): Configuration['resolve'] => ({
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
        '@': paths.include
    }
})