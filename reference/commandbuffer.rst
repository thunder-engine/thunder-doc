.. _api_CommandBuffer:

CommandBuffer
=============

Inherited: :doc:`Object<api_Object>`

.. _api_CommandBuffer_description:

Description
-----------

The CommandBuffer class represents a command buffer used in a graphics rendering pipeline. It provides methods for issuing rendering commands, setting global parameters, and managing textures.



.. _api_CommandBuffer_public:

Public Methods
--------------

+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`beginDebugMarker<api_CommandBuffer_beginDebugMarker>` (const char * name)                                                                                                                          |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`clearRenderTarget<api_CommandBuffer_clearRenderTarget>` (bool  clearColor = true, const Vector4 & color = Vector4(0.0f), bool  clearDepth = true, float  depth = 1.0f)                             |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`disableScissor<api_CommandBuffer_disableScissor>` ()                                                                                                                                               |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`dispatchCompute<api_CommandBuffer_dispatchCompute>` (ComputeInstance * shader, int32_t  groupsX, int32_t  groupsY, int32_t  groupsZ)                                                               |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`drawMesh<api_CommandBuffer_drawMesh>` (const Matrix4 & transform, Mesh * mesh, int  sub, int  layer = CommandBuffer::DEFAULT, MaterialInstance * material = nullptr)                               |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`drawMeshInstanced<api_CommandBuffer_drawMeshInstanced>` (const Matrix4 * transform, int  count, Mesh * mesh, int  sub, int  layer = CommandBuffer::DEFAULT, MaterialInstance * material = nullptr) |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`enableScissor<api_CommandBuffer_enableScissor>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)                                                                                          |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`endDebugMarker<api_CommandBuffer_endDebugMarker>` ()                                                                                                                                               |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`projection<api_CommandBuffer_projection>` () const                                                                                                                                                 |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`resetViewProjection<api_CommandBuffer_resetViewProjection>` ()                                                                                                                                     |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setColor<api_CommandBuffer_setColor>` (const Vector4 & color)                                                                                                                                      |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setGlobalTexture<api_CommandBuffer_setGlobalTexture>` (const char * name, Texture * texture)                                                                                                       |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setGlobalValue<api_CommandBuffer_setGlobalValue>` (const char * name, const Variant & value)                                                                                                       |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setMaterialId<api_CommandBuffer_setMaterialId>` (int  id)                                                                                                                                          |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setObjectId<api_CommandBuffer_setObjectId>` (int  id)                                                                                                                                              |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setRenderTarget<api_CommandBuffer_setRenderTarget>` (RenderTarget * target, int  level = 0)                                                                                                        |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setScreenProjection<api_CommandBuffer_setScreenProjection>` (float  x = -0.5f, float  y = -0.5f, float  width = 0.5f, float  height = 0.5f)                                                        |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setViewProjection<api_CommandBuffer_setViewProjection>` (const Matrix4 & view, const Matrix4 & projection)                                                                                         |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setViewport<api_CommandBuffer_setViewport>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)                                                                                              |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_CommandBuffer_texture>` (const char * name) const                                                                                                                                      |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`view<api_CommandBuffer_view>` () const                                                                                                                                                             |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`viewport<api_CommandBuffer_viewport>` () const                                                                                                                                                     |
+--------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_CommandBuffer_static:

Static Methods
--------------

+------------------------------+---------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`idToColor<api_CommandBuffer_idToColor>` (int  id) |
+------------------------------+---------------------------------------------------------+
|                         bool | :ref:`isInited<api_CommandBuffer_isInited>` ()          |
+------------------------------+---------------------------------------------------------+

.. _api_CommandBuffer_methods:

Methods Description
-------------------

.. _api_CommandBuffer_beginDebugMarker:

 void **CommandBuffer::beginDebugMarker** (char * *name*)

Begins a debug marker with the specified *name*.

----

.. _api_CommandBuffer_clearRenderTarget:

 void **CommandBuffer::clearRenderTarget** (bool  *clearColor* = true, :ref:`Vector4<api_Vector4>` & *color* = Vector4(0.0f), bool  *clearDepth* = true, float  *depth* = 1.0f)

Clears the render target with the specified *color* and *depth* values. Flag *clearColor* indicating whether to clear the *color* buffer. Flag *clearDepth* indicating whether to clear the *depth* buffer.

----

.. _api_CommandBuffer_disableScissor:

 void **CommandBuffer::disableScissor** ()

Disables scissor testing.

----

.. _api_CommandBuffer_dispatchCompute:

 void **CommandBuffer::dispatchCompute** (:ref:`ComputeInstance<api_ComputeInstance>` * *shader*, int32_t  *groupsX*, int32_t  *groupsY*, int32_t  *groupsZ*)

Dispatches a compute *shader* with the specified workgroup dimensions. Parameters *groupsX*, *groupsY* and *groupsZ* alows to specify a size of workgroup in each demension.

----

.. _api_CommandBuffer_drawMesh:

 void **CommandBuffer::drawMesh** (:ref:`Matrix4<api_Matrix4>` & *transform*, :ref:`Mesh<api_Mesh>` * *mesh*, int  *sub*, int  *layer* = CommandBuffer::DEFAULT, :ref:`MaterialInstance<api_MaterialInstance>` * *material* = nullptr)

Draws a *mesh* with the specified *sub* *mesh* index in the *transform* location with assigned *material*, and rendering *layer*.

----

.. _api_CommandBuffer_drawMeshInstanced:

 void **CommandBuffer::drawMeshInstanced** (:ref:`Matrix4<api_Matrix4>` * *transform*, int  *count*, :ref:`Mesh<api_Mesh>` * *mesh*, int  *sub*, int  *layer* = CommandBuffer::DEFAULT, :ref:`MaterialInstance<api_MaterialInstance>` * *material* = nullptr)

Draws the same *mesh* multiple times using GPU instancing. GPU will draw this *mesh* with the specified *sub* *mesh* index in different *transform* locations with assigned *material*, and rendering *layer*. Parameter *count* specifies the number of instances to draw.

----

.. _api_CommandBuffer_enableScissor:

 void **CommandBuffer::enableScissor** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Enables scissor testing with the specified parameters. Parameters *x* and *y* represents scissor coordinates. *width* and *height* scissor dimensions.

----

.. _api_CommandBuffer_endDebugMarker:

 void **CommandBuffer::endDebugMarker** ()

Ends the current debug marker.

----

.. _api_CommandBuffer_idToColor:

 :ref:`Vector4<api_Vector4>` **CommandBuffer::idToColor** (int  *id*)

Converts a 32-bit *id* to a Vector4 color.

----

.. _api_CommandBuffer_isInited:

 bool **CommandBuffer::isInited** ()

Returns true if the CommandBuffer is initialized; otherwise, false.

----

.. _api_CommandBuffer_projection:

 :ref:`Matrix4<api_Matrix4>` **CommandBuffer::projection** () const

Returns current projection matrix.

----

.. _api_CommandBuffer_resetViewProjection:

 void **CommandBuffer::resetViewProjection** ()

Resets the view and projection matrices to their saved values.

----

.. _api_CommandBuffer_setColor:

 void **CommandBuffer::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* for rendering commands.

----

.. _api_CommandBuffer_setGlobalTexture:

 void **CommandBuffer::setGlobalTexture** (char * *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a global *texture* based on its *name*.

----

.. _api_CommandBuffer_setGlobalValue:

 void **CommandBuffer::setGlobalValue** (char * *name*, :ref:`Variant<api_Variant>` & *value*)

Sets a global *value* based on its *name*.

----

.. _api_CommandBuffer_setMaterialId:

 void **CommandBuffer::setMaterialId** (int  *id*)

Sets the material *id* for rendering commands.

----

.. _api_CommandBuffer_setObjectId:

 void **CommandBuffer::setObjectId** (int  *id*)

Sets the object *id* for rendering commands.

----

.. _api_CommandBuffer_setRenderTarget:

 void **CommandBuffer::setRenderTarget** (:ref:`RenderTarget<api_RenderTarget>` * *target*, int  *level* = 0)

Sets the render *target* for subsequent rendering commands. Parameter *level* specifies the Mipmap *level*.

----

.. _api_CommandBuffer_setScreenProjection:

 void **CommandBuffer::setScreenProjection** (float  *x* = -0.5f, float  *y* = -0.5f, float  *width* = 0.5f, float  *height* = 0.5f)

Sets the screen projection matrix. Parameters *x* and *y* represents screen coordinates. *width* and *height* screen dimensions.

----

.. _api_CommandBuffer_setViewProjection:

 void **CommandBuffer::setViewProjection** (:ref:`Matrix4<api_Matrix4>` & *view*, :ref:`Matrix4<api_Matrix4>` & *projection*)

Sets the *view* and *projection* matrices.

----

.. _api_CommandBuffer_setViewport:

 void **CommandBuffer::setViewport** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Sets the viewport dimensions. Parameters *x* and *y* represents viewport coordinates. *width* and *height* viewport dimensions.

**See also** viewport().

----

.. _api_CommandBuffer_texture:

 :ref:`Texture<api_Texture>`* **CommandBuffer::texture** (char * *name*) const

Retrieves a global texture based on its *name*.

----

.. _api_CommandBuffer_view:

 :ref:`Matrix4<api_Matrix4>` **CommandBuffer::view** () const

Returns current view matrix.

----

.. _api_CommandBuffer_viewport:

 :ref:`Vector2<api_Vector2>` **CommandBuffer::viewport** () const

Returns Vector2 representing the viewport dimensions.

**See also** setViewport().


