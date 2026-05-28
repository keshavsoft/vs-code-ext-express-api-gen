import * as vscode from 'vscode';

import { createEndpointCommand } from './CreateEndpoint/start.js';

const registerStartEndpointCommand = (context) => {
    const toRegisterCommand = 'extension.editor.title.appjs.startEndpoint';

    const CreateEndpoint = vscode.commands.registerCommand(toRegisterCommand, createEndpointCommand(context));

    context.subscriptions.push(CreateEndpoint);
};

export function registerAllCommands(context) {
    registerStartEndpointCommand(context);
};