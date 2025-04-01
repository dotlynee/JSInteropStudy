function r(o, t, d, n) {
  try {
    const e = document.createElement("tr");
    e.innerHTML = `<td>${t}</td><td>${d}</td>`, o.appendChild(e), setTimeout(() => {
      n.invokeMethodAsync("OnRowAdded", t, d);
    }, 1e3);
  } catch (e) {
    n.invokeMethodAsync("OnJSError", e.message);
  }
}
export {
  r as AddTableRow
};
