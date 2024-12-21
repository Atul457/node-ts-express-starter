type IGeneratorArgs = {
    status: boolean;
    message?: string | null;
    data?: Record<any, any> | null;
};

const generator = (args: IGeneratorArgs) => {
    const { status, message, data } = args;
    return {
        status,
        message: message ?? null,
        data: data ?? null,
    };
};

export const response = {
    generator,
};
