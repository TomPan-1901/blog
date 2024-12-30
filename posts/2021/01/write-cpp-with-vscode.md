---
date: 2023-5-29
title: VSCode官方文档翻译：配合MinGW使用GCC
tags: ['programming'] 
---

在这个教程中，你将会配置VSCode来使用来自mingw-w64的GCC C++编译器(g++)与GDB debugger以创建运行在Windows上的程序。

在你配置好VS Code以后，你将会在VS Code上编译并调试一个简单的"Hello World"程序。这个教程不会涉及GCC、GDB、Mingw-w64或者C++语言相关的内容。网络上有许多关于这些内容的资源和教程。

如果你有任何疑问，欢迎在VS Code文档库中提出问题。

---

## 准备工作

为了顺利完成这个教程，你必须先按照以下步骤操作：

1. 安装VS Code。
2. 安装VS Code的C/C++插件。你可以通过在插件视图(Ctrl+Shift+X)中搜索“C++”来安装这个插件。

![C/C++ extension](https://code.visualstudio.com/assets/docs/cpp/cpp/cpp-extension.png)

3. 通过SourceForge网站安装Mingw-w64。点击[Mingw-w64](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win32/Personal%20Builds/mingw-builds/installer/mingw-w64-install.exe/download)来下载Windows版本的Mingw-w64安装器。
   1. 启动安装器。
   2. 在架构（**Architecture**）选项中选择**x86_64**，然后点击“下一步”（Next）。
   3. 再次点击“下一步”（Next）以使用默认的安装路径并安装MinGW。
4. 把Mingw-w64安装目录下面的bin文件夹按照以下方法，加入Windows的PATH环境变量中：
   1. 在Windows搜索框中，输入“设置”以打开你的Windows设置。
   2. 搜索“编辑账户的环境变量”。
   3. 选择“Path”变量，然后点击“编辑”。
   4. 选择“新建”，然后将上述的Mingw-w64的路径加入到系统环境变量中。Mingw-w64的实际路径取决于你安装的Mingw-w64的版本和你选择安装的路径。如果你使用上述设置来安装Mingw-w64，那么加入这个路径：``C:\Program Files\mingw-w64\x86_64-8.1.0-posix-seh-rt_v6-rev0\mingw64\bin`.`
   5. 点击**确定**以更新环境变量。你需要重启任何已经打开的终端窗口，来使新的环境变量设置生效。

## 检查MinGW的安装

为了检查你的Mingw-w64是否成功安装并且可用，打开一个新的终端窗口并输入：

```
g++ --version
gdb --version
```

如果你没有看到预计的输出或者提示g++和gdb不是可用的命令，检查你的安装（控制面板->程序），并且确保你上面配置的环境变量和Mingw-w64的编译器位置一致。

## 创建一个Hello World程序

在Windows命令提示符下，创建一个空文件夹`projects`，你可以在这个文件夹中存放你所有的VS Code项目。然后在这个目录下面创建一个子目录`helloworld`，打开它，然后通过如下的命令在VS Code中打开它：

```
mkdir projects
cd projects
mkdir helloworld
cd helloworld
code .
```

"code ."命令将会在当前的工作文件夹中启动VS Code，这里也将成为你的“工作区”(workspace)。当你跟随教程进行操作的时候，你将会看到三个创建在`.vscode`文件夹中的文件：

* `tasks.json`（生成命令）
* `launch.json`（调试器设置）
* `c_cpp_properties.json`（编译器路径和IntelliSense设置）

### 添加源代码文件

在内置文件浏览器的标题栏中，选择**新建文件**按钮并把这个文件命名为`helloworld.cpp`。

![New File title bar button](https://code.visualstudio.com/assets/docs/cpp/mingw/new-file-button.png)

### 加入"hello world"代码

现在把下面的代码粘贴到VS Code中：

```c++
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
    vector<string> msg {"Hello", "C++", "World", "from", "VS Code", "and the C++ extension!"};

    for (const string& word : msg)
    {
        cout << word << " ";
    }
    cout << endl;
}
```

现在按`Ctrl+S`来保存这个文件。请留意你刚刚加入的文件是如何在VS Code侧边栏的**文件浏览器**（`Ctrl+Shift+E`）中显示的：

![File Explorer](https://code.visualstudio.com/assets/docs/cpp/mingw/file-explorer-mingw.png)

通过“文件->自动保存”菜单，你也可以打开自动保存功能来自动保存你的文件更改。

左侧的活动栏可以让你打开不同的视图，例如**搜索**、**源代码管理**和**运行**。稍后的教程中你将会看到**运行**视图。你可以在[用户界面文档](https://code.visualstudio.com/docs/getstarted/userinterface)中找到更多有关其他视图的信息。

> **注意**：当你保存或打开一个C++文件的时候，你可能会看到一个来自C/C++扩展的提示，内容是关于测试版可用的消息，允许你测试新特性和修复。你可以通过点击`X`忽略这个提示。（**清理消息**）

## 探索IntelliSense

在你新创建的`helloworld.cpp`文件中，将鼠标悬停到`vector`或者`string`上来浏览类型信息。在声明了`msg`变量以后，开始输入`msg.`，就像调用成员函数那样。你应该会立即看到一个补全列表，上面显示了所有的成员函数，和一个显示`msg`类型信息的窗口：

![Statement completion IntelliSense](https://code.visualstudio.com/assets/docs/cpp/wsl/msg-intellisense.png)

你可以按`Tab`键来插入选择的成员；然后，当你键入左括号的时候，你将看到有关函数所需的所有参数的信息。

## 生成helloworld.cpp

下一步，你将会创建一个`tasks.json`文件以告诉VS Code如何生成（编译）这个程序。这个任务将会在g++编译器基于源代码创建可执行文件的时候触发。

通过主菜单，选择**终端->配置默认生成任务**，在这个显示了几个预先定义的C++编译器的生成任务的下拉菜单中，选择**g++.exe build active file**，这个任务将会生成当前显示在编辑器中（活动）的文件。

![Tasks C++ build dropdown](https://code.visualstudio.com/assets/docs/cpp/mingw/build-active-file.png)

这个操作将会在`.vscode`文件夹中创建一个`tasks.json`，并在编辑器中打开它。

新的`tasks.json`文件应该和下面的JSON文件类似：

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "shell",
      "label": "C/C++: g++.exe build active file",
      "command": "C:\\Program Files\\mingw-w64\\x86_64-8.1.0-posix-seh-rt_v6-rev0\\mingw64\\bin\\g++.exe",
      "args": ["-g", "${file}", "-o", "${fileDirname}\\${fileBasenameNoExtension}.exe"],
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "problemMatcher": ["$gcc"],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

`command`设定指定了需要运行的程序，在这个例子里面是g++。`args`数组制定了需要传递给g++的命令行。这些参数必须按照编译器要求的顺序指定。上面创建的任务告诉g++选择当前活动的文件（`${file}`），编译它，然后在当前的文件夹创建一个用和活动文件相同的名字命名的可执行文件（`${fileDirname}`），但是拥有`.exe`的扩展名（`${fileBasenameNoExtension}.exe`），在这个例子中最后会生成`helloworld.exe`。

> 注意：你可以在[变量参考](https://code.visualstudio.com/docs/editor/variables-reference)中了解到更多有关于`task.json`的信息。

`lable`值是你在任务列表上面会看到的内容，你可以把它重命名为任何你想要的名字。

位于`group`类里面的`"isDefault":true`值指定这个任务将会在你按下`Ctrl+Shift+B`时运行。这个属性只是为了方便，如果你将其设置为false，你依然可以从终端菜单中通过**任务：运行生成任务**运行它。

### 启动生成程序

1. 返回`helloworld.cpp`。在前面教程中配置的任务将会生成当前活动的文件，现在你想要生成`helloworld.cpp`。
2. 为了运行在`tasks.json`中定义的任务，按下`Ctrl+Shift+B`或者从终端菜单中选择**运行生成任务**。
3. 当这个任务启动的时候，你将会看到编辑器下方显示的综合终端面板。在这个任务完成以后，这个终端会显示来自编译器的输出，提示这次生成成功或是失败。对于一次成功的g++编译，输出将会和这个类似：

![G++ build output in terminal](https://code.visualstudio.com/assets/docs/cpp/mingw/build-output-in-terminal.png)

4. 点击+键创建一个新的终端，然后你将会看到一个目录在`helloworld`文件夹下的终端。运行`dir`命令，你现在应该看到可执行文件`helloworld.exe`。

![Hello World in PowerShell terminal](https://code.visualstudio.com/assets/docs/cpp/mingw/helloworld-in-terminal.png)

5. 你现在可以在终端中运行`helloworld`，通过输入`helloworld.exe`（如果你使用的是PowerShell，输入`.\helloworld.exe`）。

> 注意：最初启动PowerShell的时候，你可能需要按几次`Enter`才能看到PowerShell的提示，这个问题会在Windows的新版本中被修复。

### 修改tasks.json

你可以修改`tasks.json`来生成多个C++文件，使用参数`"${workspaceFolder}\\*.cpp"`而不是`${file}`。这将生成当前文件夹中所有的.cpp文件。你也可以修改输出的文件名，通过把`"${fileDirname}\\${fileBasenameNoExtension}.exe"`替换成一个固定的文件名（例如`"${workspaceFolder}\\myProgram.exe"`）

## 调试helloworld.cpp

下一步，你将创建`launch.json`以配置VS Code，使得当你按下`F5`就可以启动GDB调试器。

1. 从主菜单中，选择**运行->添加配置...**然后选择**C++(GDB/LLDB)**。
2. 然后你将会看到一个列出几个预先定义好的调试配置，选择**g++.exe build and debug actice file**。

![C++ debug configuration dropdown](https://code.visualstudio.com/assets/docs/cpp/mingw/build-and-debug-active-file.png)

VS Code将会创建`launch.json`文件，在编辑器中打开它，然后生成并运行'helloworld'。

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "g++.exe - Build and debug active file",
      "type": "cppdbg",
      "request": "launch",
      "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "miDebuggerPath": "C:\\Program Files\\mingw-w64\\x86_64-8.1.0-posix-seh-rt_v6-rev0\\mingw64\\bin\\gdb.exe",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ],
      "preLaunchTask": "C/C++: g++.exe build active file"
    }
  ]
}
```

`program`选项指定你需要调试的程序。在这个例子中是活动文件夹`${fileDirname}`和被命名为`${fileBasenameNoExtension}.exe`的可执行程序，例如，如果你当前的活动窗口是`helloworld.cpp`，那么活动文件将会是`helloworld.exe`。

在默认情况下，VS Code内置的C++扩展不会在你的源代码中加入任何端点，并且`stopAtEntry`被设置为假。

将`stopAtEntry`设置为`true`可以让调试器在开始调试时，在main函数处停下。

> 注意：`preLaunchTask`设置将会被用来指定需要运行的任务，请确保它和`task.json`中的`label`设置相一致。

### 开始调试会话

1. 返回到`helloworld.cpp`，此时这就是活动文件。
2. 按下`F5`或者在主菜单中选择**运行->开始调试**。在你开始单步执行代码之前，让我们先花一点时间来注意用户界面上的几个变化：

* 综合终端会在源代码编辑器的下方显示。在调试输出选项卡，你将会看到指示调试器启动和运行时的输出。
* 编辑器高亮显示了main函数里面的第一句话。这个断点是C++扩展自动设置的：

![Initial breakpoint](https://code.visualstudio.com/assets/docs/cpp/mingw/stopAtEntry.png)

* 左侧的运行视图显示了调试信息。你会在接下来的教程中看到一个例子。
* 在代码编辑器的顶端，有一个调试控制面板，你可以通过按住左侧的六个点来将它在屏幕上拖动。

## 单步执行代码

现在你已经准备好开始单步执行代码了。

1. 点击或按下调试控制器面板上的**单步跳过**图标。

![Step over button](https://code.visualstudio.com/assets/docs/cpp/cpp/step-over-button.png)

这会直接让（上面编写的helloworld）程序执行for循环的第一行，并且跳过`vector`和`string`类本来应该在变量`msg`创建并初始化时触发的内部函数调用。注意左侧**变量**窗口的变化。

![Debugging windows](https://code.visualstudio.com/assets/docs/cpp/wsl/debug-view-variables.png)

在这种情况下，可能会出现错误，因为尽管调试器现在可以看到循环的变量名，但是该语句尚未执行，因此此时无需读取任何内容。但是由于该语句已经执行完成，因此`msg`的内容是可见的。

2. 再次按下**单步跳过**以跳到程序的下一条指令（跳过所有用于初始化这个循环的内部代码）。现在，**变量**窗口显示了循环中变量的信息。
3. 再次按下单步执行来执行`cout`指令。（请注意，自2019年3月发行版起，在循环退出之前，C ++扩展不会将任何输出输出到调试控制台。）
4. 如果你乐意的话，你可以一直按住**单步跳过**直到vector中的所有字符都被打印到控制台上。但是如果你好奇的话，尝试按住**单步执行**按钮来跳进STL库中的代码吧！

![Breakpoint in gcc standard library header](https://code.visualstudio.com/assets/docs/cpp/cpp/gcc-system-header-stepping.png)

想要回到你自己编写的代码有两种方法，第一种是一直按住**单步跳过**，另外一种是切换到`helloworld.cpp`选项卡并设置一个断点，把光标移动到循环内部的某个`cout`指令上，然后按`F9`。在左侧的栅格*（我不确定这里gutter怎么翻译）*上会出现一个红点，指示这一行已经被设置了一个断点。

![Breakpoint in main](https://code.visualstudio.com/assets/docs/cpp/cpp/breakpoint-in-main.png)

然后按`F5`来从当前STL库中的这一行开始执行。代码的执行将会在`cout`处中断。如果你乐意的话，你可以再次按`F9`来释放这个断点。

当循环结束的时候，你可以在综合终端上面看到输出，和其他GDB输出的诊断信息一起。

## 设置一个监视器

有时候你可能想要监视程序执行时某一个变量的值。你可以通过在这个变量上设置一个监视器来做到。

1. 把光标移动到循环中，在**监视**窗口中，点击加号然后在文本框中输入word，这是循环变量的名称。现在在你单步跳过循环的时候观察监视窗口。

![Watch window](https://code.visualstudio.com/assets/docs/cpp/cpp/watch-window.png)

2. 通过在循环前加入这行声明以加入另外一个监视器:`int i = 0`。然后，在循环中，加入这句指令：`++i`、。现在，像你之前操作的那样，给`i`加入一个监视器。
3. 如果你想要在程序执行暂停时快速浏览某个变量的值，你可以将鼠标指针悬停在这个变量上。

## C/C++配置

如果你想要对于C/C++扩展有更多的控制，你可以创建一个`c_cpp_properties.json`文件，这将允许你改变诸如编译器路径、头文件包含路径、C++标准（默认是C++ 17），以及更多。

你可以通过在命令窗口（`Ctrl+Shift+P`）运行命令**C/C++ Edit Configurations (UI)**来看到可视化的配置界面。

![Command Palette](https://code.visualstudio.com/assets/docs/cpp/cpp/command-palette.png)

这将会打开**C/C++ 配置**页面。当你在此处做出修改的时候，VS Code会将他们写到`.vscode`文件夹中一个叫做`c_cpp_properties.json`的文件中。

在下图中，我们已经把**配置名称**改成了**GCC**，在下拉菜单中设置**编译路径**为g++编译器，并且**IntelliSense模式**也已经匹配了编译器（gcc-x64）。

![Command Palette](https://code.visualstudio.com/assets/docs/cpp/mingw/intellisense-configurations-mingw.png)

VS Code将这些设置放在`.vscode \ c_cpp_properties.json`中。 如果直接打开该文件，则它应如下所示：

```json
{
  "configurations": [
    {
      "name": "GCC",
      "includePath": ["${workspaceFolder}/**"],
      "defines": ["_DEBUG", "UNICODE", "_UNICODE"],
      "windowsSdkVersion": "10.0.18362.0",
      "compilerPath": "C:/Program Files/mingw-w64/x86_64-8.1.0-posix-seh-rt_v6-rev0/mingw64/bin/g++.exe",
      "cStandard": "c11",
      "intelliSenseMode": "gcc-x64"
    }
  ],
  "version": 4
}
```

你需要加入**Include path**设置，如果你的程序包含了不在你的工作区或者STL库中的头文件。

### 编译器路径

这个插件使用`compilerPath`设置来推测STL库头文件的位置。当这个扩展知道在哪里可以找到这些文件的时候，它可以提供例如智能补全和**转到定义**的特性。

C / C ++扩展尝试根据在系统上找到的内容，使用默认的编译器位置填充`compilerPath`。 该扩展在几个常见的可能存在编译器的位置中查找。

`compilerPath`的搜索顺序是：

* 首先查找微软的VC++编译器
* 然后查找WSL上的g++
* 最后是Mingw-w64的g++

如果你已经安装了Visual Studio或者WSL，你可能需要修改`compilerPath`以使得偏好的编译器被使用。比如，如果你安装了Mingw-w64的8.1.0本，使用i686架构，Win32线程，和sjlj exception安装选项，这个路径看起来将会像这样：`C:\Program Files (x86)\mingw-w64\i686-8.1.0-win32-sjlj-rt_v6-rev0`。