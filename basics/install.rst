.. _doc_install:

Install Thunder Engine
######################

Thunder Engine consists of a set of frameworks and tools. Thunder Engine has a modular structure so developers are able to choose the exact modules they need.

Thunder Engine can be installed by the two ways:

Using Releases page (Preferable)

To download latest release please follow `this link <https://github.com/thunder-engine/thunder/releases>`_


Building engine from the source
===============================

Getting Source Code
-------------------

At this moment Thunder Engine source code hosted at https://github.com/eprikazchikov/thunder and can be obtained by the several ways:

#. To get full developer repository please use Git utility

::

    git clone https://github.com/eprikazchikov/thunder.git

#. Or using official GitHub utility https://desktop.github.com/

#. To get stable release please use `Releases page <https://github.com/eprikazchikov/thunder/releases>`_

#. To get latest developer snapshot please use this `link <https://github.com/eprikazchikov/thunder/archive/master.zip>`_

.. _doc_build_windows:

Building for Windows
--------------------

#. To build Thunder Engine from source on Windows you would need to set up an additional environment:
    * Microsoft Visual Studio 2015 or higher (You can download `Community Edition <https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=15#>`_ version for free )
    * Qt 5.12.10 and  QtCreator 4.9.2 (the newest version can be unstable)

#. After setup, all required software, open "Command Prompt" console go to the directory with Thunder Engine source code and run sequence of commands below.

#. Add Qt framework to PATH. For example:

::

    thunder> set PATH=%PATH%;C:\Qt\5.12.10\msvc2015\bin

#. Run build procedure

::

    thunder> qbs setup-toolchains --detect
    thunder> qbs setup-qt C:\Qt\5.12.10\msvc2015\bin\qmake.exe qt
    thunder> qbs config defaultProfile qt
    thunder> qbs build --all-products config:release

.. _doc_build_osx:

Building for OS X
-----------------

#. Install latest XCode

#. Open a Console application go to the directory with Thunder Engine source code

#. Install `homebrew <https://docs.brew.sh/Installation>`_

#. Build Thunder Engine by the sequence of commands below.

::

    $ export QT_INSTALL_DIR=~/Qt
    $ export QT_VERSION=5.12.10
    $ export QT_BIN=$QT_INSTALL_DIR/$QT_VERSION/clang_64/bin
    $ export PATH=$QT_INSTALL_DIR/Qt Creator.app/Contents/MacOS:$QT_BIN:$PATH
    $ bash ./build/install-qt.sh -d $QT_INSTALL_DIR --version $QT_VERSION qtbase qtmultimedia qtscript qtsvg qtimageformats qtgraphicaleffects qtquickcontrols2 qttools qtxmlpatterns qtdeclarative
    $ wget https://download.qt.io/official_releases/qtcreator/4.9/4.9.2/installer_source/mac_x64/qtcreator.7z
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


.. _doc_build_ubuntu:

Building for Linux
------------------

Open Console go to the directory with Thunder Engine source code and run the sequence of commands below.

::

    $ export QT_INSTALL_DIR=~/Qt
    $ export QT_VERSION=5.12.10
    $ export QTCREATOR_VERSION=5.0.3
    $ export QT_BIN=${QT_INSTALL_DIR}/${QT_VERSION}/gcc_64/bin
    $ export PATH="$QT_INSTALL_DIR/Tools/QtCreator/bin:$QT_BIN:$PATH"
    $ bash ./build/install-qt.sh -d $QT_INSTALL_DIR --version ${QT_VERSION} qtbase qtmultimedia qtscript qtsvg qtimageformats qtgraphicaleffects qtquickcontrols2 qttools qtxmlpatterns qtdeclarative qtgamepad icu
    $ bash ./build/install-qt.sh -d $QT_INSTALL_DIR --version ${QTCREATOR_VERSION} qtcreator
    $ qbs setup-toolchains --detect
    $ qbs setup-qt --detect
    $ qbs config defaultProfile
    $ qbs install --all-products config:release
