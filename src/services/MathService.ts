function factorial(a: number): number {
  if (a === 1 || a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

export { factorial };
