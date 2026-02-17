/**
 * WebMCP (W3C Model Context Protocol) Type Declarations
 *
 * Extends the Window interface with the experimental `navigator.modelContext` API
 * available in Chrome 146+ Canary. This allows AI agents to discover and invoke
 * structured tools exposed by the page.
 *
 * @see https://chromestatus.com/feature/webmcp
 */

interface ModelContextTool {
    /** Unique identifier for the tool (e.g. "get_profile"). */
    name: string;
    /** Human-readable description of what this tool does. */
    description: string;
    /** JSON Schema describing the tool's input parameters. */
    schema: Record<string, unknown>;
    /** Handler invoked by the AI agent with the parsed arguments. */
    execute: (args: Record<string, unknown>) => Promise<unknown> | unknown;
}

interface ModelContext {
    /** Register a tool that AI agents can discover and invoke. */
    registerTool: (tool: ModelContextTool) => void;
}

interface Window {
    /**
     * Experimental WebMCP API surface.
     * Only present in browsers that implement the W3C Model Context Protocol.
     */
    modelContext?: ModelContext;
}
