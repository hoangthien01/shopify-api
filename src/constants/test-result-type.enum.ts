export enum TestResult {
    Negative = 1,
    Positive = 2
}

export type TestResultType = keyof typeof TestResult;
