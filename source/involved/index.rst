.. _contribute_documentation:

Contribute Documentation
========================

Thunder Engine documentation is an open project, and we welcome community contributions. This section contains guides on contributing to the documentation, style guidelines, and the review process.

.. toctree::
   :maxdepth: 2
   :caption: Contents

   documentation_guide
   style_guide
   review_process

Overview
--------

Thunder Engine documentation is written in **reStructuredText** (RST) format and built using **Sphinx**. All documentation files are located in the `thunder-engine/thunder-doc` repository.

Ways to Contribute
------------------

You can contribute in several ways:

*   **Fix typos and errors** — the easiest way to help
*   **Expand existing sections** — add examples, clarify descriptions
*   **Create new documentation** — for missing features or components
*   **Translations** — help with translating to other languages
*   **Reviews** — review pull requests from other contributors

Getting Started
---------------

1. **Clone the repository**

   .. code-block:: bash
      git clone https://github.com/thunder-engine/thunder-doc.git
      cd thunder-doc

2. **Install build tools**

   .. code-block:: bash
      pip install sphinx sphinx-rtd-theme m2r2

3. **Build the documentation locally**

   .. code-block:: bash
      make html
      
      # Or on Windows
      .\make.bat html

   The build result will be in the ``_build/html/`` folder. Open ``index.html`` in your browser to view it.

4. **Create a branch for your changes**

   .. code-block:: bash
      git checkout -b docs/my-improvements

5. **Make changes and submit a pull request**

   .. code-block:: bash
      git add .
      git commit -m "docs: description of your changes"
      git push origin docs/my-improvements

Documentation Structure
-----------------------

The documentation is organized in the following structure:

.. code-block::
   thunder-doc/
   ├── index.rst                 # Main page
   ├── conf.py                   # Sphinx configuration
   ├── audio                     # Audio section
   ├── basics/                   # Engine basics
   ├── scripting/                # Scripting
   ├── rendering/                # Rendering
   └── involved/                 # This section
       ├── index.rst
       ├── documentation_guide.rst
       ├── style_guide.rst
       └── review_process.rst

Files and Their Purpose
-----------------------

======================= ==============================================================
File                    Purpose
======================= ==============================================================
``index.rst``           Section entry point, contains toctree and general description
``*.rst``               Documentation in reStructuredText format
``conf.py``             Sphinx settings (theme, extensions, paths)
``_static/``            Images, CSS, JavaScript files
``_build/``             Generated HTML documentation (in .gitignore)
======================= ==============================================================

The following pages contain detailed guides:

*   :ref:`documentation_guide` — how to write and format documentation
*   :ref:`style_guide` — text and code style guidelines
*   :ref:`review_process` — pull request review process

Useful Links
------------

*   `Documentation Repository <https://github.com/thunder-engine/thunder-doc>`_
*   `Engine Repository <https://github.com/thunder-engine/thunder>`_