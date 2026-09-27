.. _doc_basics_quick_start:

Quick Start
===========

Thunder Hub
-----------

Thunder Hub is a separate application that lets you manage installed engine versions and projects centrally. All project-related workflows (creating/importing projects, switching engine versions for a project, and publishing) are handled via Thunder Hub.

Download Thunder Hub releases here:

`Thunder Hub Releases <https://github.com/thunder-engine/thunder-hub/releases>`_

Quick access with Thunder Hub
-----------------------------

You can manage projects and engine installs directly from Thunder Hub — see the full guide: :doc:`thunder_hub`.

.. image:: media/hub_projects.png
    :alt: Thunder Hub Projects
    :width: 320px

Manual Download SDK
-------------------

The recommended way to get a stable build is to download prebuilt releases from GitHub:

`Thunder Engine Releases <https://github.com/thunder-engine/thunder/releases>`_

If you need specific versions or CI builds, consider using Thunder Hub (see below) to manage engine versions.

Install & Run
-------------

- Unpack the downloaded archive for your platform.
- To run the editor, launch the provided `WorldEditor` binary in the distribution `bin` folder.

Build from source
-----------------

If you need to build from source (for development or custom builds) see the detailed guide:

:doc:`/involved/build_from_source`

Build systems supported
-----------------------

- QBS (used historically; QBS is included with recent Qt Creator bundles).
- CMake — supported as an alternative (see CMake examples in the build guide).

Next steps
----------

- Read the full build guide if compiling from source.
- Use Thunder Hub to manage projects and engine versions.
- For editor-specific documentation, see the Editor section in this documentation.
