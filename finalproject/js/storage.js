
export function saveViewPreference(view) {

  localStorage.setItem('directoryView', view);
}

export function getViewPreference() {

  return localStorage.getItem('directoryView');
}
