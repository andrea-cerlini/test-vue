export const userDatabase: User[] = [];
export function addUser(
  user?: User,
  userName?: string,
  bestScore?: number
): void {
  if (userName != undefined && bestScore != undefined) {
    userDatabase.push({ name: userName, bestScore: bestScore });
  } else {
    userDatabase.push(user as User);
  }
}

interface User {
  name: string;
  bestScore: number;
}
