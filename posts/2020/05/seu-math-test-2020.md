---
title: 东南大学2020年5月30日高数月考
date: 2020-05-20
tags: ['math']
---

# 1.

设曲线C为 $y=\sqrt{4x-x^2-3}$ 上从点$A(1,0)$到点$B(3,0)$的一段，则曲线积分
$$
\int_{C}\sqrt{x^2+y^2}\mathrm{d}x+[5x+y\ln (x+\sqrt{x^2+y^2})]\mathrm{d}y=
$$

---

**解答** 
积分式子的形式比较复杂，采用格林公式计算会比较方便。从点$(1,0)$到点$(3,0)$是顺时针方向，从而格林公式得出的答案带有负号。

取上半圆环和点$(1,0)$到$(3,0)$的逆时针路径，使用格林公式结果如下：

$$
\begin{cases}
        P=\sqrt{x^2+y^2}\\
        Q=5x+y\ln(x+\sqrt{x^2+y^2})
    \end{cases}\\
    \begin{cases}
        \dfrac{\partial P}{\partial y}=\dfrac{y}{\sqrt{x^2+y^2}}\\
        \dfrac{\partial Q}{\partial x}=5+
        \dfrac{y}{\sqrt{x^2+y^2}}
    \end{cases}
$$

从而
$$
\iint_{D}\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}\textrm{d}x\textrm{d}y=\iint_{D}5\textrm{d}x\textrm{d}y=\frac{5\pi}{2}
$$
下方直线段的积分结果为4，所以上半部分的结果是$\dfrac{5\pi}{2}-4$，最终结果为
$$ \int_{C}\sqrt{x^2+y^2}\mathrm{d}x+[5x+y\ln (x+\sqrt{x^2+y^2})]\mathrm{d}y=4-\dfrac{5\pi}{2}$$

# 2.

设$D_k$是区域$D=\{(x,y)||x|+|y|\le 1\}$在第$k$象限的部分，记
$$
I_k=\iint_{D_k}(y-x)\textrm{d}x\textrm{d}y\,(k=1,2,3,4)
$$
判断每个区域积分值的正负。

**解答**
画出积分区域的图，容易知道这个区域是一个正方形。画出直线$y=x$，容易知道在第二象限的部分满足$y-x>0$，第四象限的部分$y-x<0$。一三象限的积分值为0。

# 3.

设$L$为球面$x^2+y^2+z^2=a^2$与平面$x+y+z=0$的交线，则
$$
    \int_{L}(x^2+z^2)\mathrm{d}s=
$$

**解答** 
我们不难发现这个图形具有高度的对称性，从而
$$
\begin{aligned}
\oint_{L}(x^2+z^2)\mathrm{d}s
=&\oint_{L}(a^2-y^2)\mathrm{d}s\\
=&\oint_{L}a^2\mathrm{d}s-\frac{1}{3}\oint_{L}(x^2+y^2+z^2)\mathrm{d}s\\
=&\frac{2}{3}\oint_{L}a^2\mathrm{d}s\\
=&\frac{4\pi}{3}a^3
\end{aligned}
$$
# 4.

曲面$z=2-x^2-y^2$与$z=1$围成的立体的表面积为

**解答** 这个物体由一个抛物面和一个圆组成。圆的方程为$x^2+y^2=1$，面积为$\pi$，抛物面的面积利用二重积分计算。

$$
\begin{aligned}
    S_{抛物面}=&\iint_{x^2+y^2\le 1}\mathrm{d}S\\
    =&\iint_{x^2+y^2\le 1}\sqrt{1+4x^2+4y^2}\mathrm{d}x\mathrm{d}y\\
    =&\iint_{x^2+y^2\le 1}r\sqrt{1+4r^2}\mathrm{d}r\mathrm{d}\theta=\frac{5\sqrt{5}-1}{6}\pi
\end{aligned}
$$
所以总的面积为$\dfrac{5\sqrt{5}+5}{6}\pi$。

# 5.

设$\Sigma$为曲面$z=x^2+y^2$上满足$z\le 2x$部分，取上侧，则
$$
    \iint_{\Sigma}(x+y^2)\mathrm{d}z\wedge \mathrm{d}x+z\mathrm{d}x\wedge \mathrm{d}y=
$$
**解答** 如果直接进行的话要投影到两个区域上面，笔者在此选择用高斯公式进行求解。

把平面$z=2x$被平面所截下的部分补到上面，记
$$I=\iint_{\Sigma}(x+y^2)\mathrm{d}z\wedge \mathrm{d}x+z\mathrm{d}x\wedge \mathrm{d}y$$

则
$$
\begin{aligned}
    \iiint_{V}(2y+1)\mathrm{d}x\mathrm{d}y\mathrm{d}z=\iint_{\Sigma'}(x+y^2)\mathrm{d}z\wedge \mathrm{d}x+z\mathrm{d}x\wedge \mathrm{d}y-I
\end{aligned}
$$
先计算左端的三重积分：根据对称性含有$y$的项都可以消去。
$$
\begin{aligned}
    \iiint_{V}\mathrm{d}x\mathrm{d}y\mathrm{d}z
    =&\iint_{x^2+y^2\le 2x}\mathrm{d}x\mathrm{d}y\int_{x^2+y^2}^{2x}\mathrm{d}z\\
    =&\iint_{x^2+y^2\le 2x}(2x-x^2-y^2)\mathrm{d}x\mathrm{d}y\\
    =&\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\mathrm{d}\theta\int_{0}^{2\cos \theta}r(2r\cos \theta-r^2)\mathrm{d}r\\
    =&\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\frac{4}{3}\cos^4\theta\mathrm{d}\theta=\frac{\pi}{2}
\end{aligned}
$$
再计算平面的第二型面积分：
$$
\begin{aligned}
    \iint_{\Sigma'}(x+y^2)\mathrm{d}z\wedge \mathrm{d}x+z\mathrm{d}x\wedge \mathrm{d}y=\iint_{x^2+y^2\le 2x}2x\mathrm{d}x\mathrm{d}y=2\pi
\end{aligned}
$$
从而
$$
    \frac{\pi}{2}=2\pi-I\\
    I=\frac{3}{2}\pi
$$
# 6.

设
$$
\begin{aligned}
    I_{1}=&\iint_{D}\sin\sqrt{x^2+y^2}\mathrm{d}x\mathrm{d}y\\
    I_{2}=&\iint_{D}\cos\sqrt{x^2+y^2}\mathrm{d}x\mathrm{d}y\\
    I_{3}=&\iint_{D}\cos (x^2+y^2)\mathrm{d}x\mathrm{d}y
\end{aligned}
$$
其中
$$
    D=\left\{(x,y)|x^2+y^2\le \frac{1}{4}\right\}
$$
比较三个积分的大小。

**解答** 显然本题只需要比较出三个函数值的大小。这也是这份试卷里为数不多不需要计算的题目。

不难得出在给定区域上
$$
    \cos (x^2+y^2)>\cos\sqrt{x^2+y^2}>\sin\sqrt{x^2+y^2}
$$
从而$I_3>I_2>I_1$。

# 7.

设$L$为$x^2+y^2=2x(y\ge 0)$上从$O(0,0)$到$A(2,0)$的一段连续函数，满足
$$
    f(x)=x^2+\frac{1}{\pi}\int_{L}y(f(x)+e^x)\mathrm{d}x+(e^x-xy^2)\mathrm{d}y
$$
求$f(x)$。

**解答** 显然后端的第二型曲线积分不好处理，需要使用格林公式化简成二重积分再进行求解。

补上从$O(0,0)$到$A(2,0)$的线段，容易知道这部分的积分为0，根据格林公式
$$
\begin{aligned}
    \int_{L}y(f(x)+e^x)\mathrm{d}x+(e^x-xy^2)\mathrm{d}y
    =&\iint_{x^2+y^2\le 2x(y\ge 0)}y^2+f(x)\mathrm{d}x\mathrm{d}y\\
    =&\frac{\pi}{8}+\iint_{x^2+y^2=2x(y\ge 0)}f(x)\mathrm{d}x\mathrm{d}y
\end{aligned}
$$
所以
$$
    f(x)=x^2+\frac{1}{8}+\frac{1}{\pi}\iint_{x^2+y^2=2x(y\ge 0)}f(x)\mathrm{d}x\mathrm{d}y
$$
两边再次在这个区域上积分就能得到
$$
    \iint_{x^2+y^2=2x(y\ge 0)}f(x)\mathrm{d}x\mathrm{d}y=\frac{11}{8}\pi
$$
从而
$$
    f(x)=x^2+\frac{3}{2}
$$

# 8.

设
$$
    \begin{aligned}
        L_1:x^2+y^2=1\\
        L_2:x^2+y^2=2\\
        L_3:2x^2+y^2=2
    \end{aligned}
$$
记
$$
    I_i=\oint_{L_i}\left(y+\frac{y^3}{6}\right)\mathrm{d}x+\left(2x-\frac{x^3}{3}\right)\mathrm{d}y
$$
比较三个积分的大小。

**解答** 首先将这几个曲线积分化成二重积分。
$$
\begin{cases}
    P=y+\dfrac{y^3}{6}\\
    Q=2x-\dfrac{x^3}{3}
\end{cases}\\
\begin{cases}
    \dfrac{\partial P}{\partial y}=1+\frac{y^2}{2}\\
    \dfrac{\partial Q}{\partial x}=2-x^2
\end{cases}
$$
所以
$$
    \oint_{L_i}\left(y+\frac{y^3}{6}\right)\mathrm{d}x+\left(2x-\frac{x^3}{3}\right)\mathrm{d}y=\iint_{D_i}\left(1-x^2-\frac{y^2}{2}\right)\mathrm{d}x\mathrm{d}y
$$
*我本来以为这个可以直接看出来的，没想到这个不能直接判断。。。*

首先可以肯定的是 $I_3$ 是最大的。这个是可以从积分区域上面看出来的。剩下的两个要算一下，根据对称性化简以后不是很困难。
$$
\begin{aligned} &\iint_{x^2+y^2\le R^2}\left(1-\frac{y^2}{2}-x^2\right)\mathrm{d}x\mathrm{d}y\\ =&\iint_{x^2+y^2\le R^2}\mathrm{d}x\mathrm{d}y-\frac{3}{4}\iint_{x^2+y^2\le R^2}\left(x^2+y^2\right)\mathrm{d}x\mathrm{d}y=\pi R^2-\frac{3\pi R^4}{8} \end{aligned}
$$


所以$I_2<I_1$ ，最终结果为
$$
    I_3>I_1>I_2
$$

# 9.

设区域$\Omega$为$x^2+y^2+z^2\le 1$，则
$$
    \iiint_{\Omega}(x+z^2)\mathrm{d}x\mathrm{d}y\mathrm{d}z=
$$

**解答** 本题比较简单，用对称性和轮换对称性容易求解。

$$
    \begin{aligned}
        \iiint_{\Omega}(x+z^2)\mathrm{d}x\mathrm{d}y\mathrm{d}z
        =&\frac{1}{3}\iiint_{\Omega}(x^2+y^2+z^2)\mathrm{d}x\mathrm{d}y\mathrm{d}z\\
        =&\frac{1}{3}\iiint_{\Omega}(r^4\sin\varphi)\mathrm{d}r\mathrm{d}\varphi\mathrm{d}\theta\\
        =&\frac{4\pi}{15}
    \end{aligned}
$$

# 10.

已知表达式
$$
    \frac{ay}{(x+y)^2}\mathrm{d}x+\frac{bx}{(x+y)^2}\mathrm{d}y
$$
是某个函数的全微分，则常数$a$与$b$之间的关系是？

**解答** 两个式子再求一下偏导就好了。
$$
    \begin{cases}
        \dfrac{\partial P}{\partial y}=\dfrac{a(x-y)}{(x+y)^3}\\
        \dfrac{\partial Q}{\partial x}=\dfrac{b(y-x)}{(x+y)^3}
    \end{cases}
$$
所以$a=-b$。

# 11.

设在$xOy$平面上有一力场，力场的大小与作用和点$M$到点$A(0,1)$的距离的平方成反比（比例系数为$k$），力的方向从点$A$指向$M$。则质点$M$沿曲线$(x-2)^2+y^2=4(y\ge 0)$从点$B(4,0)$运动到点$O(0,0)$，力所做的功为？

**解答** 根据物理学常识我们很容易知道平方反比力是保守力，接下来怎么做不用我多说了吧。。。

根据物理意义很容易看出

$$
    W=\left(\frac{1}{\sqrt{17}}-1\right)k
$$

# 12.

设物体为圆锥面$z=\sqrt{x^2+y^2}$被圆柱面$x^2+y^2=2ax(a>0)$所截下的部分，密度函数为$\mu (x,y,z)=xy+yz+zx$，则该物体的质量为？

**解答** 由对称性其中两项可以直接消去。
$$
\begin{aligned}
    m=\iint_{x^2+y^2\le 2ax}(xy+yz+zx)\mathrm{d}S
    =&\iint_{x^2+y^2\le 2ax}\sqrt{2}\cdot x\cdot \sqrt{x^2+y^2}\mathrm{d}x\mathrm{d}y\\
    =&\sqrt{2}\iint_{x^2+y^2\le 2ax}x\sqrt{x^2+y^2}\mathrm{d}x\mathrm{d}y\\
    =&\sqrt{2}\int_{-\frac{\pi}{2}}^\frac{\pi}{2}\mathrm{d}\theta\int_{0}^{2a\cos\theta}r^3\cos \theta\mathrm{d}r\\
    =&8\sqrt{2}\int_{0}^{\frac{\pi}{2}}\cos ^5\theta\mathrm{d}\theta=8\sqrt{2}\cdot \frac{4}{5}\cdot\frac{2}{3}\cdot 1=\frac{64\sqrt{2}}{15} 
\end{aligned}
$$
# 13.

求下面积分的值。
$$
\int_{\frac{1}{4}}^{\frac{1}{2}}\mathrm{d}y\int_{\frac{1}{2}}^{\sqrt{y}}xye^{\frac{y^2}{x}}\mathrm{d}x+\int_{\frac{1}{2}}^{1}\mathrm{d}y\int_{y}^{\sqrt{y}}xye^{\frac{y^2}{x}}\mathrm{d}x
$$

**解答** 交换积分次序以后求解即可。
$$
    \begin{aligned}
        &\int_{\frac{1}{4}}^{\frac{1}{2}}\mathrm{d}y\int_{\frac{1}{2}}^{\sqrt{y}}xye^{\frac{y^2}{x}}\mathrm{d}x+\int_{\frac{1}{2}}^{1}\mathrm{d}y\int_{y}^{\sqrt{y}}xye^{\frac{y^2}{x}}\mathrm{d}x\\
        =&\int_{\frac{1}{2}}^{1}\mathrm{d}x\int_{x^2}^{x}xye^{\frac{y^2}{x}}\mathrm{d}y\\
        =&\int_{\frac{1}{2}}^{1}x^2(e^x-e^{x^3})\mathrm{d}x=\frac{e}{3}-\frac{5\sqrt{e}}{8}+\frac{1}{6}e^{\frac{1}{8}}
    \end{aligned}
$$

# 14.

设函数
$$
    Q(x,y)=\frac{x}{y^3}
$$
如果对于上半平面$(y>0)$的任意有向光滑闭曲线都有
$$
    \oint_{C}P(x,y)\mathrm{d}x+Q(x,y)\mathrm{d}y=0
$$
那么函数$P(x,y)$可以取为？

**解答** 本题只要选出一个正确的就行，注意P在平面上必须都有意义。选择$2x^2-\frac{1}{2y^2}$

# 15.

设L为任何不经过$y=0$的区域$D$内的曲线，为了使曲线积分
$$
    \int_{L}\frac{x}{y}(x^2+y^2)^{\alpha}\mathrm{d}x-\frac{x^2}{y^2}(x^2+y^2)^{\alpha}\mathrm{d}y
$$
与路径无关，求$\alpha$的值。

**解答** 根据积分与路径无关的条件列出方程即可。
$$
    \begin{cases}
        \dfrac{\partial P}{\partial y}=x
        \left(2\alpha(x^2+y^2)^{\alpha-1}-\dfrac{(x^2+y^2)^\alpha}{y^2}\right)\\
        \dfrac{\partial Q}{\partial x}=-\dfrac{2x(x^2+y^2)^{\alpha}+2x^3\alpha(x^2+y^2)^{\alpha-1}}{y^2}
    \end{cases}
$$
令$\dfrac{\partial P}{\partial y}=\dfrac{\partial Q}{\partial x}$，整理后可以得到$\alpha=-\dfrac{1}{2}$.

# 16.

设$\Sigma$为球面$x^2+y^2+z^2=R^2$的下半部分，$\cos \alpha,\cos \beta,\cos\gamma$为$\Sigma$的外法线方向的方向余弦，则
$$
    \iint_{\Sigma}[(x^3+R^3)\cos \alpha+(y^3+R^3)\cos \beta+(z^3+R^3)\cos\gamma]\mathrm{d}S=
$$

**解答** 显然直接做不太容易，补上一个圆以后用高斯公式求解。

补上平面$z=0$上的圆$x^2+y^2=R^2$，由高斯公式得
$$
    \begin{aligned}
        \iiint_{x^2+y^2+z^2}3(x^2+y^2+z^2)\mathrm{d}x\mathrm{d}y\mathrm{d}z=\pi R^5+\iint_{\Sigma}[(x^3+R^3)\cos \alpha+(y^3+R^3)\cos \beta+(z^3+R^3)\cos\gamma]\mathrm{d}S
    \end{aligned}
$$

下面求解左侧的积分。

$$
\begin{aligned}
    \iiint_{x^2+y^2+z^2}3(x^2+y^2+z^2)\mathrm{d}x\mathrm{d}y\mathrm{d}z=3\iiint_{r<R}r^4\sin\varphi\mathrm{d}r\mathrm{d}\varphi\mathrm{d}\theta=\frac{6\pi R^5}{5}
\end{aligned}
$$
从而原积分的结果为
$$
    \frac{\pi}{5}R^5
$$

# 17.

设L是柱面$x^2+y^2=1$与平面$2x+y-2z=0$的交线，从$z$轴正向往$z$轴负向看去为逆时针方向，则曲线积分
$$
    \oint_{L}xz\mathrm{d}x+x\mathrm{d}y+\frac{y^2}{2}\mathrm{d}z=
$$

**解答** 化为参数方程直接写就好。

曲线的参数方程为
$$
\begin{cases}
    x=\cos\theta\\
    y=\sin\theta\\
    z=\cos \theta+\dfrac{\sin \theta}{2}
\end{cases}
\\
\begin{cases}
\mathrm{d}x=-\sin\theta\mathrm{d}\theta\\
\mathrm{d}y=\cos\theta\mathrm{d}\theta\\
\mathrm{d}z=\dfrac{\cos \theta}{2}-\sin\theta
\end{cases}
$$

*注意被积函数的奇偶性，几乎所有的项都被消去了*

$$
\begin{aligned}
    &\oint_{L}xz\mathrm{d}x+x\mathrm{d}y+\frac{y^2}{2}\mathrm{d}z\\
    =&\int_{0}^{2\pi}\cos^2\theta+\frac{\sin^2\theta}{2}\left(\dfrac{\cos \theta}{2}-\sin\theta\right)-\cos\theta\sin\theta\left(\dfrac{\cos \theta}{2}-\sin\theta\right)\mathrm{d}\theta\\
    =&\int_{0}^{2\pi}\cos^2\theta\mathrm{d}\theta=\pi
\end{aligned}
$$

# 18.

设曲线
$$
\begin{cases}
    |x|+|y|=1\\
    z=\arctan(x+y)
\end{cases}
$$
从$z$轴正向向$z$轴负向看去为逆时针方向，则曲线积分
$$
    \oint_{L}(x^2-y)\mathrm{d}x+(2x^2+y^2)\mathrm{d}y+z^2\mathrm{d}z=
$$

**解答**
含有绝对值的式子显然不好直接化成参数方程，所以用$\textbf{Stokes}$公式来解决。

取
$$
\begin{cases}
    |x|+|y|=1\\
    z=\arctan(x+y)
\end{cases}
$$
的相交部分作为曲面。
由$\textbf{Stokes}$公式

$$
    \oint_{L}(x^2-y)\mathrm{d}x+(2x^2+y^2)\mathrm{d}y+z^2\mathrm{d}z=\iint_{|x|+|y|\le 1}3\mathrm{d}x\wedge \mathrm{d}y=6
$$

# 19.

设$L$为$|x|+|y|=1$取逆时针方向，曲线积分
$$
\oint_{L}\frac{y\mathrm{d}x-x\mathrm{d}y}{3x^2-2xy+3y^2}=
$$
**解答** 注意到
$$
\dfrac{\partial P}{\partial y}=\dfrac{\partial Q}{\partial x}
$$
且函数在原点无定义，
所以用割补法化为另外一个曲线的线积分即可。

取曲线$3x^2-2xy+3y^2=\varepsilon$，使用简单的割补法就可以得到
$$
\oint_{L}\frac{y\mathrm{d}x-x\mathrm{d}y}{3x^2-2xy+3y^2}=\frac{1}{\epsilon}\oint_{L'}y\mathrm{d}x-x\mathrm{d}y
$$

上面那个积分的几何意义是这个椭圆面积的$-\dfrac{2}{\varepsilon}$倍，用各种技巧都可以得到椭圆的长短轴分别为
$\dfrac{\sqrt{\varepsilon}}{\sqrt{2}},\dfrac{\sqrt{\varepsilon}}{2}$，面积为$\pi ab=\dfrac{\varepsilon}{2\sqrt{2}}$，原积分的结果为$-\dfrac{\sqrt{2}\pi}{2}$。

# 20.

向量场$\vec{A}=(x^3,y^3,z^3)$穿过由曲面
$$
y=R+\sqrt{R^2-x^2-z^2}(R>0)
$$
与
$x^2+z^2=y^2$所围成的封闭曲面的外侧的通量是？

**解答** 用高斯公式即可。

只需要求出下面这个积分：
$$
\begin{aligned}
    3\iiint_{D}(x^2+y^2+z^2)\mathrm{d}x\mathrm{d}y\mathrm{d}z
    =&\int_{0}^{2\pi}\mathrm{d}\theta\int_{0}^{\frac{\pi}{4}}\mathrm{d}\varphi\int_{0}^{2R\cos\varphi}r^4\sin\varphi\mathrm{d}r\\
    =&3\cdot \frac{28\pi}{15}R^5=\frac{28\pi R^5}{5}
\end{aligned}
$$
