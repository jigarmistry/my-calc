'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let docalc = vscode.commands.registerCommand('extension.doCalc', () => {
        var selection = vscode.window.activeTextEditor.selection;
        var startLine = selection.start.line - 1;
        var selectedText = vscode.window.activeTextEditor.document.getText(selection);
        if (selectedText) {
            if (selectedText.indexOf('+') > 0) {
                var arrValues = selectedText.split('+');
                var ans = 0;
                for (var i = 0; i < arrValues.length; i++) {
                    if (!isNaN(arrValues[i])) {
                        ans = ans + parseInt(arrValues[i]);
                    }
                }
                vscode.window.showInformationMessage(ans.toString());
            }
            if (selectedText.indexOf('-') > 0) {
                var arrValues = selectedText.split('-');
                var ans = 0;
                for (var i = 0; i < arrValues.length; i++) {
                    if (!isNaN(arrValues[i])) {
                        if (i == 0) {
                            ans = parseInt(arrValues[i]);
                        } else {
                            ans = ans - parseInt(arrValues[i]);
                        }
                    }
                }
                vscode.window.showInformationMessage(ans.toString());
            }
            if (selectedText.indexOf('*') > 0) {
                var arrValues = selectedText.split('*');
                var ans = 1;
                for (var i = 0; i < arrValues.length; i++) {
                    if (!isNaN(arrValues[i])) {
                        ans = ans * parseInt(arrValues[i]);
                    }
                }
                vscode.window.showInformationMessage(ans.toString());
            }
            if (selectedText.indexOf('/') > 0) {
                var arrValues = selectedText.split('/');
                var ans = 1;
                for (var i = 0; i < arrValues.length; i++) {
                    if (!isNaN(arrValues[i]) && arrValues[i] != "0") {
                        ans = parseInt(arrValues[i]) / ans;
                    }
                }
                vscode.window.showInformationMessage(ans.toString());
            }
        } else {
            vscode.window.showInformationMessage("No Output !");
        }
    });

    context.subscriptions.push(docalc);
}

export function deactivate() {
}