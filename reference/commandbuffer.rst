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
|                           void | :ref:`beginDebugMarker<api_CommandBuffer_9e5bd762>` (const TString & name)                                                          |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`disableScissor<api_CommandBuffer_860c931b>` ()                                                                                |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`dispatchCompute<api_CommandBuffer_95cd3618>` (ComputeInstance & shader, int32_t  groupsX, int32_t  groupsY, int32_t  groupsZ) |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`drawMesh<api_CommandBuffer_a02e89d5>` (Mesh * mesh, uint32_t  sub, uint32_t  layer, MaterialInstance & instance)              |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`enableScissor<api_CommandBuffer_9301c482>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)                          |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`endDebugMarker<api_CommandBuffer_185eb2d9>` ()                                                                                |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setCameraProperties<api_CommandBuffer_be4d719a>` (Camera * camera)                                                            |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setGlobalTexture<api_CommandBuffer_a5379ec0>` (const TString & name, Texture * texture)                                       |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setRenderTarget<api_CommandBuffer_c173296d>` (RenderTarget * target, uint32_t  level = 0)                                     |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setViewProjection<api_CommandBuffer_3512f790>` (const Matrix4 & view, const Matrix4 & projection)                             |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setViewport<api_CommandBuffer_4e3a28d0>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)                            |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_CommandBuffer_e584cb6a>` (const TString & name) const                                                             |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+



.. _api_CommandBuffer_static:

Static Methods
--------------

+------------------------------+-------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`idToColor<api_CommandBuffer_62bd7c54>` (uint32_t  id) |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`isInited<api_CommandBuffer_365bd9ce>` ()              |
+------------------------------+-------------------------------------------------------------+

.. _api_CommandBuffer_methods:

Methods Description
-------------------

.. _api_CommandBuffer_9e5bd762:

 void **CommandBuffer::beginDebugMarker** (:ref:`TString<api_TString>` & *name*)

Begins a debug marker with the specified name.

----

.. _api_CommandBuffer_860c931b:

 void **CommandBuffer::disableScissor** ()

Disables scissor testing.

----

.. _api_CommandBuffer_95cd3618:

 void **CommandBuffer::dispatchCompute** (:ref:`ComputeInstance<api_ComputeInstance>` & *shader*, int32_t  *groupsX*, int32_t  *groupsY*, int32_t  *groupsZ*)

Dispatches a compute *shader* with the specified workgroup dimensions. Parameters groupsX, *groupsY* and *groupsZ* alows to specify a size of workgroup in each demension.

----

.. _api_CommandBuffer_a02e89d5:

 void **CommandBuffer::drawMesh** (:ref:`Mesh<api_Mesh>` * *mesh*, uint32_t  *sub*, uint32_t  *layer*, :ref:`MaterialInstance<api_MaterialInstance>` & *instance*)

Draws a *mesh* with the specified *sub* *mesh* index with assigned material instance, and rendering layer.

----

.. _api_CommandBuffer_9301c482:

 void **CommandBuffer::enableScissor** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Enables scissor testing with the specified parameters. Parameters *x* and *y* represents scissor coordinates. *width* and *height* scissor dimensions.

----

.. _api_CommandBuffer_185eb2d9:

 void **CommandBuffer::endDebugMarker** ()

Ends the current debug marker.

----

.. _api_CommandBuffer_62bd7c54:

 :ref:`Vector4<api_Vector4>`  **CommandBuffer::idToColor** (uint32_t  *id*)

Converts a 32-bit *id* to a Vector4 color.

----

.. _api_CommandBuffer_365bd9ce:

 bool **CommandBuffer::isInited** ()

Returns true if the CommandBuffer is initialized; otherwise, false.

----

.. _api_CommandBuffer_be4d719a:

 void **CommandBuffer::setCameraProperties** (:ref:`Camera<api_Camera>` * *camera*)

Sets the *camera* specific global variables. This function sets up view, projection and clipping planes global shader variables.

----

.. _api_CommandBuffer_a5379ec0:

 void **CommandBuffer::setGlobalTexture** (:ref:`TString<api_TString>` & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a global *texture* based on its name.

----

.. _api_CommandBuffer_c173296d:

 void **CommandBuffer::setRenderTarget** (:ref:`RenderTarget<api_RenderTarget>` * *target*, uint32_t  *level* = 0)

Sets the render *target* for subsequent rendering commands. Parameter *level* specifies the Mipmap level.

----

.. _api_CommandBuffer_3512f790:

 void **CommandBuffer::setViewProjection** (:ref:`Matrix4<api_Matrix4>` & *view*, :ref:`Matrix4<api_Matrix4>` & *projection*)

Sets the *view* and *projection* matrices.

----

.. _api_CommandBuffer_4e3a28d0:

 void **CommandBuffer::setViewport** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Sets the viewport dimensions. Parameters *x* and *y* represents viewport coordinates. *width* and *height* viewport dimensions.

----

.. _api_CommandBuffer_e584cb6a:

 :ref:`Texture<api_Texture>` * **CommandBuffer::texture** (:ref:`TString<api_TString>` & *name*) const

Retrieves a global texture based on its name.


