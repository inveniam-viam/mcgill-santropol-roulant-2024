/** @typedef {z.infer<typeof DatasourceSpecFileSchema>} DatasourceSpecFile */
export const DatasourceSpecFileSchema: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodEffects<z.ZodString, string, string>;
    options: z.ZodAny;
    buildOptions: z.ZodDefault<z.ZodOptional<z.ZodObject<{
        batchSize: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        batchSize: number;
    }, {
        batchSize?: number | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    buildOptions: {
        batchSize: number;
    };
    options?: any;
}, {
    type: string;
    name: string;
    options?: any;
    buildOptions?: {
        batchSize?: number | undefined;
    } | undefined;
}>;
export type DatasourceSpecFile = z.infer<typeof DatasourceSpecFileSchema>;
import { z } from 'zod';
//# sourceMappingURL=datasource.schema.d.ts.map