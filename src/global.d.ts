declare module 'recoil' {
  const useRecoilState: <T>(...args: any[]) => [T, (v: T) => void]
  const atom: any;
  const useSetRecoilState: any;
  export const RecoilRoot: any;
}