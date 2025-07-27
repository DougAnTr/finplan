import { TextEncoder, TextDecoder } from "util";

// Add TextEncoder and TextDecoder to global scope for tests
global.TextEncoder = TextEncoder;
// @ts-expect-error - Node.js TextDecoder has slightly different types than browser TextDecoder
global.TextDecoder = TextDecoder;
