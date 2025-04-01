import { DotNet } from "@microsoft/dotnet-js-interop";

export function AddTableRow(
    tableBody: HTMLElement,
    name: string,
    city: string,
    dotNetRef: DotNet.DotNetObject // .NET 객체 참조
): void {
    try {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${name}</td><td>${city}</td>`;
        tableBody.appendChild(row);

        // .NET 메서드 호출 (1초 후 비동기 실행)
        setTimeout(() => {
            dotNetRef.invokeMethodAsync('OnRowAdded', name, city);
        }, 1000);

    } catch (error) {
        dotNetRef.invokeMethodAsync('OnJSError', (error as Error).message);
    }
}