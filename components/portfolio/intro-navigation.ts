let completedIntroInAppSession = false;

export function markIntroCompleted() {
  completedIntroInAppSession = true;
}

export function hasCompletedIntroInThisAppSession() {
  return completedIntroInAppSession;
}
