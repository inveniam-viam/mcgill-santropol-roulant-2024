export function getEvidenceConfigLegacy(): Promise<{
    plugins: {
        components?: Record<string, {
            overrides: string[];
            aliases: Record<string, string>;
            provides: string[];
        }> | undefined;
        datasources?: Record<string, {
            overrides?: string[] | undefined;
        }> | undefined;
    };
    layout?: string | false | undefined;
}>;
//# sourceMappingURL=getEvidenceConfig.legacy.d.ts.map