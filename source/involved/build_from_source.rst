.. _doc_involved_build_from_source:

Building Thunder Engine from Source
===================================

Getting Source Code
-------------------

At this moment Thunder Engine source code hosted at https://github.com/thunder-engine/thunder and can be obtained by the several ways:

#. To get full developer repository please use Git utility

::

    git clone https://github.com/thunder-engine/thunder.git

#. Or using official GitHub utility https://desktop.github.com/

#. To get stable release please use `Releases page <https://github.com/thunder-engine/thunder/releases>`_

#. To get latest developer snapshot please use this `link <https://github.com/thunder-engine/thunder/archive/master.zip>`_

Required Software
-----------------

Before building Thunder Engine from source, make sure the following software is installed and available in your environment:

- Git — to clone the repository.
- QBS (`qbs`) — build tool used by the project; note that recent Qt Creator bundles `qbs` (you can also install `qbs` separately). Ensure it's in your `PATH` or use Qt Creator's tools.
- CMake — alternative, widely-used build system; `cmake` (>=3.16) recommended.
- Qt — matching Qt versions are required per-platform (examples below use Qt 6.7.3).
- C++ toolchain:
    - Windows: Microsoft Visual Studio 2022 or newer (MSVC toolchain).
    - Linux: GCC or Clang toolchain (install `build-essential` or equivalent).
    - macOS: Xcode and command line tools.
- Qt Creator — optional, useful for editing and debugging (examples reference Qt Creator versions).
- Additional utilities: `wget`, `7z` (for macOS example), `bash` on Windows (WSL or Git Bash) where applicable.

Ensure the relevant tool binaries (for example `qmake`, `qbs`, compiler tools) are available on your `PATH` before starting the build.

Building for Windows
--------------------

#. To build Thunder Engine from source on Windows you would need to set up an additional environment:
    * Microsoft Visual Studio 2022 or higher (You can download `Community Edition <https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=15#>`_ version for free )
    * Qt 6.7.3 and Qt Creator 13.0.1

#. After setup, all required software, open "Command Prompt" console go to the directory with Thunder Engine source code and run sequence of commands below.

#. Add Qt framework to PATH. For example:

::

    thunder> set PATH=%PATH%;C:\Qt\6.7.3\msvc2015\bin

#. Run build procedure

::

    thunder> qbs setup-toolchains --detect
    thunder> qbs setup-qt C:\Qt\6.7.3\msvc2015\bin\qmake.exe qt
    thunder> qbs config defaultProfile qt
    thunder> qbs build --all-products config:release

Building with CMake
-------------------

Thunder Engine can also be configured and built using CMake. Below are generic examples — adapt variables and generator names to your environment.

Common steps (cross-platform):

::

    # from project root
    cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
    cmake --build build --config Release

Windows (Visual Studio generator):

::

    cmake -S . -B build -G "Visual Studio 17 2022" -A x64 -DCMAKE_BUILD_TYPE=Release
    cmake --build build --config Release

macOS / Linux (Ninja or Unix Makefiles):

::

    cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
    cmake --build build -- -j$(nproc)

Notes:

- If the project requires Qt, point CMake to your Qt installation via `-DQt5_DIR=` or `-DQt6_DIR=` as appropriate.
- Use `-G "Ninja"` for faster parallel builds when Ninja is installed.
- Replace `$(nproc)` with the appropriate CPU-count command on macOS (`sysctl -n hw.ncpu`).

Building for OS X
-----------------

#. Install latest XCode

#. Open a Console application go to the directory with Thunder Engine source code

#. Install `homebrew <https://docs.brew.sh/Installation>`_

#. Build Thunder Engine by the sequence of commands below.

::

    $ export QT_INSTALL_DIR=~/Qt
    $ export QT_VERSION=6.7.3
    $ export QT_BIN=$QT_INSTALL_DIR/$QT_VERSION/clang_64/bin
    $ export PATH=$QT_INSTALL_DIR/Qt Creator.app/Contents/MacOS:$QT_BIN:$PATH
    $ bash ./build/install-qt.sh -d $QT_INSTALL_DIR --version $QT_VERSION qtbase qt5compat qtsvg qtimageformats qtxmlpatterns qtdeclarative
    # Download and install Qt Creator 13.0.1 from the official Qt downloads for your platform.
    # Example (replace with an appropriate URL for your platform):
    # $ wget https://download.qt.io/official_releases/qtcreator/13.0/13.0.1/qtcreator-13.0.1-macos-x64.7z
    $ 7z x -y -o${QT_INSTALL_DIR} qtcreator.7z
    $ qbs --version
    $ qbs setup-toolchains --detect
    $ qbs setup-qt $QT_BIN/qmake qt-brew
    $ qbs install --all-products config:release profile:qt-brew

(Optional) To build Thunder Engine for **iOS** and **tvOS** please run additional commands below.

::

    $ qbs resolve config:release profile:xcode-iphoneos-arm64
    $ qbs install --all-products config:release profile:xcode-iphoneos-arm64
    $ qbs resolve config:release profile:xcode-appletvos-arm64
    $ qbs install --all-products config:release profile:xcode-appletvos-arm64

Building for Linux
------------------

Open Console go to the directory with Thunder Engine source code and run the sequence of commands below.

::

    $ export QT_INSTALL_DIR=~/Qt
    $ export QT_VERSION=6.7.3
    $ export QTCREATOR_VERSION=13.0.1
    $ export QT_BIN=${QT_INSTALL_DIR}/${QT_VERSION}/gcc_64/bin
    $ export PATH="$QT_INSTALL_DIR/Tools/QtCreator/bin:$QT_BIN:$PATH"
    $ bash ./build/install-qt.sh -d $QT_INSTALL_DIR --version ${QT_VERSION} qtbase qtsvg qtimageformats qttools qtxmlpatterns qtdeclarative qtgamepad icu
    $ bash ./build/install-qt.sh -d $QT_INSTALL_DIR --version ${QTCREATOR_VERSION} qtcreator
    $ qbs setup-toolchains --detect
    $ qbs setup-qt --detect
    $ qbs config defaultProfile
    $ qbs install --all-products config:release
