.. _doc_install:

Install Thunder Engine
==============================

Thunder Engine consists of a set of frameworks and tools. Thunder Engine has a module structure so developers are able to choose the exact modules they need.

Thunder Engine can be installed by the several ways:

.. #. Using Thunder Launcher the special `Online Installation Tool <https://thunderengine.ru/download>`_. For more information, please visit the :ref:`online installation <doc_online_installation>` page.

#. Using `Releases page <https://github.com/eprikazchikov/thunder/releases>`_
#. By building Thunder Engine from the :ref:`source <doc_build_source>`. For more information, please follow the instructions for the specific platform:
	* :ref:`Windows <doc_build_windows>`
	* :ref:`OS X <doc_build_osx>`
	* :ref:`Linux (Ubuntu) <doc_build_ubuntu>`
	
.. _doc_online_installation:

.. Online Installation
.. ----------------------------------------------

.. _doc_build_source:

Getting Source Code
----------------------------------------------

At this moment Thunder Engine source code hosted at https://github.com/eprikazchikov/thunder and can be obtained by the several ways:

#. To get full developer repository please use Git utility

	::

		git clone https://github.com/eprikazchikov/thunder.git

#. Or using official GitHub utility https://desktop.github.com/

#. To get stable release please use `Releases page <https://github.com/eprikazchikov/thunder/releases>`_

#. To get latest developer snapshot please use this `link <https://github.com/eprikazchikov/thunder/archive/master.zip>`_

.. _doc_build_windows:

Building for Windows
----------------------------------------------

#. To build Thunder Engine from source on Windows you would need to set up an additional environment:

	* Microsoft Visual Studio 2015 or higher (You can download `Community Edition <https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=15#>`_ version for free ) 
	* Qt 5.12 and  QtCreator 4.5.1 or higher (`Offline installer <http://download.qt.io/archive/qt/5.12/5.12.3/qt-opensource-windows-x86-5.12.3.exe>`_)

#. After setup, all required software, open "Command Prompt" console go to the directory with Thunder Engine source code and run sequence of commands below.

#. Add Qt framework to PATH. For example:

::

    thunder> set PATH=%PATH%;C:\Qt\5.12.3\msvc2015\bin

#. Run build procedure

::

    thunder> qbs setup-toolchains --detect
    thunder> qbs setup-qt C:\Qt\5.12.3\msvc2015\bin\qmake.exe qt
    thunder> qbs config defaultProfile qt
    thunder> qbs build --all-products config:release

.. _doc_build_osx:

Building for OS X
----------------------------------------------

#. Install latest XCode

#. Open a Console application go to the directory with Thunder Engine source code

#. Install `homebrew <https://docs.brew.sh/Installation>`_

#. Build Thunder Engine by the sequence of commands below.

::

	user@host:~$ brew update
	user@host:~$ brew install qbs
	user@host:~$ qbs setup-toolchains --detect
	user@host:~$ qbs setup-qt /usr/local/opt/qt/bin/qmake qt-brew
	user@host:~$ qbs install --all-products config:release profile:qt-brew
	
(Optional) To build Thunder Engine for **iOS** and **tvOS** please run additional commands below.

.. attention:: This platform is not properly tested yet.

::

	user@host:~$ qbs resolve config:release profile:xcode-iphoneos-arm64
	user@host:~$ qbs install --all-products config:release profile:xcode-iphoneos-arm64
	user@host:~$ qbs resolve config:release profile:xcode-appletvos-arm64
	user@host:~$ qbs install --all-products config:release profile:xcode-appletvos-arm64


.. _doc_build_ubuntu:

Building for Linux (Ubuntu - Experimental)
--------------------------------------------------
.. attention:: This platform is not properly tested yet.

Open Console go to the directory with Thunder Engine source code and run the sequence of commands below.
Please to pay attention to your Ubuntu version in case you have Ubuntu 16 you need to set xenial at the end of the first step and bionic if you have Ubuntu 18

::
    user@host:~$ sudo add-apt-repository --yes ppa:beineri/opt-qt-5.12.3-xenial
    user@host:~$ sudo add-apt-repository --yes ppa:ubuntu-toolchain-r/test
    user@host:~$ sudo apt-get update -qq
    user@host:~$ sudo apt-get -y install qt512base qt512multimedia qt512script qt512svg qt512imageformats qt512graphicaleffects qt512quickcontrols2 qt512tools qt512xmlpatterns binutils zlib1g-dev xorg-dev gcc-7 g++-7
    user@host:~$ source /opt/qt512/bin/qt512-env.sh
    user@host:~$ wget https://github.com/eprikazchikov/dependencies/releases/download/qbs-1.11.0/qbs-1.11.0-linux.tar.gz
    user@host:~$ tar -xvzf qbs-1.11.0-linux.tar.gz > /dev/null
    user@host:~$ export PATH=$PATH:qbs-build/bin
    user@host:~$ qbs setup-toolchains --detect
    user@host:~$ qbs setup-qt --detect
    user@host:~$ qbs config defaultProfile qt-5-12-3
    user@host:~$ qbs config --list
    user@host:~$ qbs install --all-products config:release
