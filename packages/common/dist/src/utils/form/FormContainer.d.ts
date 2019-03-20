import * as React from 'react';
interface IFormInput {
    prefix?: any;
    component: any;
    name: string;
    type: string;
    value: any;
    placeholder: string;
}
interface IProps {
    formInputs: IFormInput[];
    submitButton?: boolean;
    reply?: boolean;
    handleSubmit?: any;
}
export declare const FormContainer: React.FunctionComponent<IProps>;
export {};
