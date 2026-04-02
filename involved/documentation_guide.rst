.. _documentation_guide:

Documentation Writing Guide
===========================

This guide describes how to write documentation for Thunder Engine, including formatting, structure, and best practices.

reStructuredText Format
-----------------------

The documentation is written in **reStructuredText** (RST) format. Here are the basic elements:

**Headings**

.. code-block:: rst

    Level 1 Heading
    ================
    
    Level 2 Heading
    ----------------
    
    Level 3 Heading
    ~~~~~~~~~~~~~~~
    
    Level 4 Heading
    ^^^^^^^^^^^^^^^

**Lists**

.. code-block:: rst

    - Bullet list item
    - Another item
        - Nested item
    
    1. Numbered list
    2. Second item
        #. Nested numbered item

**Text Formatting**

.. code-block:: rst

    *italic* or `italic`
    **bold**
    ``monospace (code)``

**Links**

.. code-block:: rst

    External link: `Thunder Engine <https://thunder-engine.org>`_
    
    Internal link to a section: :ref:`camera`
    
    Link to a document: :doc:`/rendering/camera`

**Images**

.. code-block:: rst

    .. figure:: /_static/images/camera-diagram.png
        :alt: Camera diagram
        :width: 400px
        
        Image caption

**Warnings and Notes**

.. code-block:: rst

    .. note::
        This is a note with important information.
    
    .. tip::
        Useful advice for users.
    
    .. warning::
        Warning about potential issues.
    
    .. caution::
        Important caution.

**Code Blocks**

.. code-block:: rst

    .. code-block:: cpp
        
        // C++ code example
        void example() {
            std::cout << "Hello" << std::endl;
        }
    
    .. code-block:: bash
        git clone https://github.com/thunder-engine/thunder.git

**Tables**

.. code-block:: rst

    ============= =====================================
    Property      Description
    ============= =====================================
    **fov**       Field of view in degrees
    **near**      Near clipping plane
    ============= =====================================

Document Structure
------------------

Each document should have the following structure:

.. code-block:: rst

    .. _unique_anchor:
    
    Document Title
    ==============
    
    Brief description (1-2 sentences) of what this document covers.
    
    Overview
    --------
    
    More detailed description of functionality, capabilities, and purpose.
    
    Properties/Parameters
    ---------------------
    
    **propertyName** (type)
        Property description.
    
        *   Additional details
        *   Default values
    
    **anotherProperty** (type)
        Description.
    
    Usage Examples
    --------------
    
    .. code-block:: cpp
        
        // Specific code example
        void example() {
            // Code
        }
    
    Recommendations
    ---------------
    
    *   Usage tip
    *   Best practices
    
    Common Issues and Solutions
    ---------------------------
    
    **Issue**
        Solution to the issue.
    
    See Also
    --------
    * :ref:`related-section`
    * :doc:`/path/to/document`

Anchors
-------

Each document should begin with a unique anchor:

.. code-block:: rst

    .. _camera:

    Camera
    ======

Anchors are used for internal links:

.. code-block:: rst

    For detailed information, see :ref:`camera`.

File Naming Conventions
-----------------------

*   Use lowercase
*   Separate words with underscores (snake_case): `audio_clip.rst`
*   Index files are always named `index.rst`

Examples:

.. code-block:: rst

    camera.rst
    skinned_mesh_renderer.rst
    audio_clip.rst

Linking Documents
-----------------

**ToC (Table of Contents)**

Index files use toctree:

.. code-block:: rst

    .. toctree::
       :maxdepth: 2
       :caption: Section Title
       
       page1
       page2
       subfolder/page3

**Cross-references Between Documents**

.. code-block:: rst

    See :ref:`camera` for information about the camera.
    
    More details in :doc:`/rendering/materials`.

Images
------

Images are saved in the local `media` folder. Use relative paths:

.. code-block:: rst

    .. image:: media/welcome.png
        :alt: Welcome screen
        :width: 800
        
        Welcome screen

Best Practices
--------------

**Be Concise but Informative**
    Avoid excessive detail. Every sentence should provide value.

**Use Active Voice**
    *   Good: "The Camera component determines the viewpoint"
    *   Bad: "The viewpoint is determined by the Camera component"

**Write Code Examples**
    Each section should contain at least one practical example.

**Specify Default Values**
    Always include the default value for each property.

**Mark Unimplemented Features**
    If a feature is not implemented, state it explicitly:

    .. code-block:: rst
    
        **shadowQuality** (int) — *currently not implemented*
            Shadow quality from this source.

**Use Cross-references**
    Link related sections for easier navigation.

Checking Documentation
----------------------

Before submitting a pull request:

1. **Build the documentation locally**
    Use folowing command:

    .. code-block:: bash
        make clean
        make html

2. **Check links**
   Sphinx will output warnings about broken links.

3. **Check spelling**
   Use a spell checker in your editor.

4. **Ensure code examples compile** (if possible)

5. **Test on mobile devices** — ensure formatting is correct

Useful Resources
----------------

*   `Sphinx reStructuredText Primer <https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html>`_
*   `reStructuredText Cheatsheet <https://github.com/ralsina/rst-cheatsheet>`_
*   `Sphinx Directives Reference <https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html>`_