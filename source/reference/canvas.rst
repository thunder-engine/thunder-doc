.. _api_Canvas:

Canvas
======

Inherited: :ref:`Component<api_Component>`

.. _api_Canvas_description:

Description
-----------

Canvas provides an off-screen rendering surface for UI widgets. It renders all child widgets to a texture, which can then be displayed in the scene.



.. _api_Canvas_public:

Public Methods
--------------

+--------------------------------------------+-----------------------------------------------------------------------------------------------+
|                                       void | :ref:`disableClip<api_Canvas_94f0b637>` ()                                                    |
+--------------------------------------------+-----------------------------------------------------------------------------------------------+
|                                       void | :ref:`draw<api_Canvas_593ecaf8>` (CommandBuffer * buffer)                                     |
+--------------------------------------------+-----------------------------------------------------------------------------------------------+
|                                       void | :ref:`drawMesh<api_Canvas_c8f697e2>` (Mesh * mesh, MaterialInstance * material)               |
+--------------------------------------------+-----------------------------------------------------------------------------------------------+
|                                       void | :ref:`drawRect<api_Canvas_938afb42>` (MaterialInstance * material, RectTransform * transform) |
+--------------------------------------------+-----------------------------------------------------------------------------------------------+
|                                       void | :ref:`markDirty<api_Canvas_240efab7>` ()                                                      |
+--------------------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`RectTransform<api_RectTransform>` * | :ref:`rectTransform<api_Canvas_fba2736d>` ()                                                  |
+--------------------------------------------+-----------------------------------------------------------------------------------------------+
|                                       void | :ref:`setClipRegion<api_Canvas_e0af964b>` (const Vector4 & region)                            |
+--------------------------------------------+-----------------------------------------------------------------------------------------------+
|                                       void | :ref:`setRectTransform<api_Canvas_b109edf8>` (RectTransform * transform)                      |
+--------------------------------------------+-----------------------------------------------------------------------------------------------+
|                                       void | :ref:`update<api_Canvas_854dec27>` (const Vector2 & position)                                 |
+--------------------------------------------+-----------------------------------------------------------------------------------------------+



.. _api_Canvas_static:

Static Methods
--------------

None

.. _api_Canvas_methods:

Methods Description
-------------------

.. _api_Canvas_94f0b637:

 void **Canvas::disableClip** ()

Disables the clip region.

Turns off scissor testing, allowing rendering to the full screen.

----

.. _api_Canvas_593ecaf8:

 void **Canvas::draw** (:ref:`CommandBuffer<api_CommandBuffer>` * *buffer*)

Draws the canvas and its contents uses command *buffer* to record draw commands into.

----

.. _api_Canvas_c8f697e2:

 void **Canvas::drawMesh** (:ref:`Mesh<api_Mesh>` * *mesh*, :ref:`MaterialInstance<api_MaterialInstance>` * *material*)

Draws a *mesh* with the given material.

----

.. _api_Canvas_938afb42:

 void **Canvas::drawRect** (:ref:`MaterialInstance<api_MaterialInstance>` * *material*, :ref:`RectTransform<api_RectTransform>` * *transform*)

Draws a rectangle with the given *material* and transform.

Creates a model matrix from the rect's size and position, combines it with the world transform, and draws the default plane mesh. The hash is computed from the *transform* and size for batching purposes.

----

.. _api_Canvas_240efab7:

 void **Canvas::markDirty** ()

Marks the canvas as dirty, forcing a re-render.

When marked dirty, the canvas will redraw all child widgets on the next draw call.

----

.. _api_Canvas_fba2736d:

 :ref:`RectTransform<api_RectTransform>` * **Canvas::rectTransform** ()

Returns the RectTransform component of the canvas.

Lazy-initializes and caches the RectTransform reference.

**See also** setRectTransform().

----

.. _api_Canvas_e0af964b:

 void **Canvas::setClipRegion** (:ref:`Vector4<api_Vector4>` & *region*)

Sets the clip *region* (scissor rectangle).

Enables scissor testing to restrict rendering to the specified region. Coordinates are in screen space.

----

.. _api_Canvas_b109edf8:

 void **Canvas::setRectTransform** (:ref:`RectTransform<api_RectTransform>` * *transform*)

Sets the rect *transform* reference.

Internal method for caching the RectTransform.

**See also** rectTransform().

----

.. _api_Canvas_854dec27:

 void **Canvas::update** (:ref:`Vector2<api_Vector2>` & *position*)

Updates all child widgets with the given cursor/touch position.

Propagates the update call to all child widgets, setting their canvas reference before updating.


