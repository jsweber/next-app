
// template和layout的区别是：template在共享的组件之间会重新生成实例，对于针对某些导航需要特殊行为的页面，
// 使用template会是更好的选择，对于useEffect和useState等也会在每次导航中重新执行
// 使用场景：layout适合只在刚加载执行一些行为但是每次页面切换不执行的场景；template适合不管是初次加载还是切换都执行的场景。
export default function Template({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}