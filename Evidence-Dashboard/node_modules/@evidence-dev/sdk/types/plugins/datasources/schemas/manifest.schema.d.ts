export const ManifestSchema: z.ZodObject<{
    renderedFiles: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>;
    locatedFiles: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    locatedSchemas: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    renderedFiles: Record<string, string[]>;
    locatedFiles?: Record<string, string[]> | undefined;
    locatedSchemas?: string[] | undefined;
}, {
    renderedFiles: Record<string, string[]>;
    locatedFiles?: Record<string, string[]> | undefined;
    locatedSchemas?: string[] | undefined;
}>;
import { z } from 'zod';
//# sourceMappingURL=manifest.schema.d.ts.map