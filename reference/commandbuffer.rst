.. _api_CommandBuffer:

CommandBuffer
=============

Inherited: None

.. _api_CommandBuffer_description:

Description
-----------

The CommandBuffer class represents a command buffer used in a graphics rendering pipeline. It provides methods for issuing rendering commands, setting global parameters, and managing textures.



.. _api_CommandBuffer_public:

Public Methods
--------------

+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`beginDebugMarker<api_CommandBuffer_451a2f8e>` (const TString & name)                                                          |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`disableScissor<api_CommandBuffer_8bcd7fa0>` ()                                                                                |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`dispatchCompute<api_CommandBuffer_7ab8643c>` (ComputeInstance & shader, int32_t  groupsX, int32_t  groupsY, int32_t  groupsZ) |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`drawMesh<api_CommandBuffer_dfb7325c>` (Mesh * mesh, uint32_t  sub, uint32_t  layer, MaterialInstance & instance)              |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`enableScissor<api_CommandBuffer_ed67a103>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)                          |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`endDebugMarker<api_CommandBuffer_a7ef3605>` ()                                                                                |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setCameraProperties<api_CommandBuffer_cef7b034>` (Camera * camera)                                                            |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setGlobalTexture<api_CommandBuffer_ad1e5c07>` (const TString & name, Texture * texture)                                       |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setRenderTarget<api_CommandBuffer_c63e501a>` (RenderTarget * target, uint32_t  level = 0)                                     |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setViewProjection<api_CommandBuffer_df76ce02>` (const Matrix4 & view, const Matrix4 & projection)                             |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setViewport<api_CommandBuffer_6421e79a>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)                            |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_CommandBuffer_1e64f0a5>` (const TString & name) const                                                             |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+



.. _api_CommandBuffer_static:

Static Methods
--------------

+------------------------------+-------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`idToColor<api_CommandBuffer_71c3b0fa>` (uint32_t  id) |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`isInited<api_CommandBuffer_715d09ac>` ()              |
+------------------------------+-------------------------------------------------------------+

.. _api_CommandBuffer_methods:

Methods Description
-------------------

.. _api_CommandBuffer_451a2f8e:

 void **CommandBuffer::beginDebugMarker** (:ref:`TString<api_TString>` & *name*)

Begins a debug marker with the specified *name*.

----

.. _api_CommandBuffer_8bcd7fa0:

 void **CommandBuffer::disableScissor** ()

Disables scissor testing.

----

.. _api_CommandBuffer_7ab8643c:

 void **CommandBuffer::dispatchCompute** (:ref:`ComputeInstance<api_ComputeInstance>` & *shader*, int32_t  *groupsX*, int32_t  *groupsY*, int32_t  *groupsZ*)

Dispatches a compute *shader* with the specified workgroup dimensions. Parameters *groupsX*, *groupsY* and *groupsZ* alows to specify a size of workgroup in each demension.

----

.. _api_CommandBuffer_dfb7325c:

 void **CommandBuffer::drawMesh** (:ref:`Mesh<api_Mesh>` * *mesh*, uint32_t  *sub*, uint32_t  *layer*, :ref:`MaterialInstance<api_MaterialInstance>` & *instance*)

Draws a *mesh* with the specified *sub* *mesh* index with assigned material *instance*, and rendering *layer*.

----

.. _api_CommandBuffer_ed67a103:

 void **CommandBuffer::enableScissor** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Enables scissor testing with the specified parameters. Parameters *x* and *y* represents scissor coordinates. *width* and *height* scissor dimensions.

----

.. _api_CommandBuffer_a7ef3605:

 void **CommandBuffer::endDebugMarker** ()

Ends the current debug marker.

----

.. _api_CommandBuffer_71c3b0fa:

 :ref:`Vector4<api_Vector4>`  **CommandBuffer::idToColor** (uint32_t  *id*)

Converts a 32-bit *id* to a Vector4 color.

----

.. _api_CommandBuffer_715d09ac:

 bool **CommandBuffer::isInited** ()

Returns true if the CommandBuffer is initialized; otherwise, false.

----

.. _api_CommandBuffer_cef7b034:

 void **CommandBuffer::setCameraProperties** (:ref:`Camera<api_Camera>` * *camera*)

Sets the *camera* specific global variables. This function sets up view, projection and clipping planes global shader variables.

----

.. _api_CommandBuffer_ad1e5c07:

 void **CommandBuffer::setGlobalTexture** (:ref:`TString<api_TString>` & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a global *texture* based on its *name*.

----

.. _api_CommandBuffer_c63e501a:

 void **CommandBuffer::setRenderTarget** (:ref:`RenderTarget<api_RenderTarget>` * *target*, uint32_t  *level* = 0)

Sets the render *target* for subsequent rendering commands. Parameter *level* specifies the Mipmap *level*.

----

.. _api_CommandBuffer_df76ce02:

 void **CommandBuffer::setViewProjection** (:ref:`Matrix4<api_Matrix4>` & *view*, :ref:`Matrix4<api_Matrix4>` & *projection*)

Sets the *view* and *projection* matrices.

----

.. _api_CommandBuffer_6421e79a:

 void **CommandBuffer::setViewport** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Sets the viewport dimensions. Parameters *x* and *y* represents viewport coordinates. *width* and *height* viewport dimensions.

----

.. _api_CommandBuffer_1e64f0a5:

 :ref:`Texture<api_Texture>` * **CommandBuffer::texture** (:ref:`TString<api_TString>` & *name*) const

Retrieves a global texture based on its *name*.


