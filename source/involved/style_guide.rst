.. _style_guide:

Documentation Style Guide
=========================

This guide describes the style for text, code, and terminology for Thunder Engine documentation.

General Principles
------------------

**Clarity**
    Write in simple and understandable language. Avoid complex constructions.

**Consistency**
    Use the same terminology throughout all documentation.

**Relevance**
    Documentation should correspond to the current engine version.

**Practicality**
    Each section should answer the question "how to use this?".

Tone and Style
--------------

**Use Active Voice**

*   ✅ "The Camera component displays the scene on the screen"
*   ❌ "The scene is displayed on the screen by the Camera component"

**Address the Reader as "you"**

*   ✅ "You can create a camera using the method..."
*   ❌ "The user can create a camera..."

**Use Imperative Mood in Examples**

*   ✅ "Create an actor and add the Camera component"
*   ❌ "One should create an actor and add the Camera component"

Terminology
-----------

**Key Terms**

================= =============================================
Term              Usage
================= =============================================
Actor             Always capitalized, as a class
Component         Always capitalized
Camera            Component name capitalized
Mesh              Geometry resource
Resource          Resource (asset)
Scene             Scene
Engine            Engine (in the context of the Engine class)
================= =============================================

**Verbs**

================= =============================================
Verb              Usage
================= =============================================
create            For creating objects
load              For loading resources
set               For setting properties
get               For retrieving values
enable/disable    For enabled/disabled
================= =============================================

**Text Formatting**

Element           Formatting              Example
----------------- ----------------------- ------------------------
Class names       ``monospace``           ``Camera``
Method names      ``monospace()``         ``setFov()``
Properties        **bold**                **enabled**
File names        ``monospace``           ``main.cpp``
Paths             ``monospace``           ``/resources/textures/``
Code              .. code-block::         with language specified
Values            ``monospace``           ``true``, ``nullptr``

Code Formatting
---------------

**Code Blocks**

Always specify the language:

.. code-block:: rst

    .. code-block:: cpp
        
        void example() {
            // code
        }

**Variable Names in Examples**

Use meaningful names:

.. code-block:: cpp

    // Good
    Camera* mainCamera = actor->addComponent<Camera>();
    
    // Bad
    Camera* cam = actor->addComponent<Camera>();

**Comments in Code**

Write comments in English:

.. code-block:: cpp

    // Create the main camera
    Camera* camera = actor->addComponent<Camera>();
    camera->setFov(70.0f);  // Set the field of view

Property Formatting
-------------------

**Property Description Format**

.. code-block:: rst

    **propertyName** (type)
        Property description.
        
        *   Default value: ``defaultValue``
        *   Range: from ``min`` to ``max``
        *   Additional notes

**Example**

.. code-block:: rst

    **fieldOfView** (float)
        Field of view in degrees for perspective projection.
        
        *   Default value: ``60.0``
        *   Range: from ``1.0`` to ``179.0``
        *   Large values create a "fisheye" effect

Example Formatting
------------------

**Basic Example**

.. code-block:: rst

    **Basic Camera Creation**
    
    .. code-block:: cpp
        
        Actor* cameraActor = scene->createActor("MainCamera");
        Camera* camera = cameraActor->addComponent<Camera>();
        camera->setFov(70.0f);

Warning Formatting
------------------

**Note** — for important but non-critical information:

.. code-block:: rst

    .. note::
        The camera must be added to an actor before calling ``setMainCamera()``.

**Tip** — for useful advice:

.. code-block:: rst

    .. tip::
        For 2D games, use orthographic projection with ``setOrthographic(true)``.

**Warning** — for potential issues:

.. code-block:: rst

    .. warning::
        Do not call ``update()`` manually. The animation system calls this method automatically.

**Caution** — for critical warnings:

.. code-block:: rst

    .. caution::
        Incorrect near/far plane settings may lead to depth artifacts.

Table Formatting
----------------

**Simple Table**

.. code-block:: rst

    ============= =====================================
    Property      Description
    ============= =====================================
    **fov**       Field of view in degrees
    **near**      Near clipping plane
    **far**       Far clipping plane
    ============= =====================================

**Table with Alignment**

.. code-block:: rst

    ============= =====================================
    Property      Description
    ============= =====================================
    **fov**       Field of view in degrees
                  Range: 1.0 - 179.0
                  Default: 60.0
    **near**      Near clipping plane
                  Default: 0.1
    ============= =====================================

API References
--------------

**Class References**

.. code-block:: rst

    The :cpp:class:`Camera` class controls scene display.

**Method References**

.. code-block:: rst

    Use the :cpp:func:`Camera::setFov()` method to adjust the field of view.

**Enumeration References**

.. code-block:: rst

    The projection type is set via :cpp:enum:`Camera::ProjectionType`.

Pre-Submission Checklist
------------------------

Before submitting a pull request, verify:

* [ ] The document begins with a unique anchor
* [ ] Correct headers are used (===, ---, ~~~)
* [ ] All code blocks have the language specified
* [ ] Default value is specified for each property
* [ ] Usage examples are added
* [ ] All links work (verified via ``make html``)
* [ ] No spelling errors
* [ ] Terminology is consistent
* [ ] Unimplemented features are marked as "*currently not implemented*"