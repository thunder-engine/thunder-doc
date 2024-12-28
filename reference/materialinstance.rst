.. _api_MaterialInstance:

MaterialInstance
================

Inherited: None

.. _api_MaterialInstance_description:

Description
-----------

The MaterialInstance class enables customization of material parameters and textures for rendering objects. It supports various types of parameters, and the customization can be done per-instance.



.. _api_MaterialInstance_public:

Public Methods
--------------

+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`batch<api_MaterialInstance_batch>` (MaterialInstance & instance)                                            |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|      :ref:`uint32_t<api_uint32_t>` | :ref:`instanceCount<api_MaterialInstance_instanceCount>` () const                                                 |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|      :ref:`uint32_t<api_uint32_t>` | :ref:`instanceSize<api_MaterialInstance_instanceSize>` () const                                                   |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|    :ref:`Material<api_Material>` * | :ref:`material<api_MaterialInstance_material>` () const                                                           |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|      :ref:`uint32_t<api_uint32_t>` | :ref:`paramCount<api_MaterialInstance_paramCount>` () const                                                       |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                        std::string | :ref:`paramName<api_MaterialInstance_paramName>` (uint32_t  index) const                                          |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|        :ref:`Variant<api_Variant>` | :ref:`paramValue<api_MaterialInstance_paramValue>` (uint32_t  index) const                                        |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|  :ref:`ByteArray<api_ByteArray>` & | :ref:`rawUniformBuffer<api_MaterialInstance_rawUniformBuffer>` ()                                                 |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`resetBatches<api_MaterialInstance_resetBatches>` ()                                                         |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setBool<api_MaterialInstance_setBool>` (const char * name, const bool * value, int32_t  count = 1)          |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setBufferValue<api_MaterialInstance_setBufferValue>` (const char * name, const void * value)                |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setFloat<api_MaterialInstance_setFloat>` (const char * name, const float * value, int32_t  count = 1)       |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setInstanceCount<api_MaterialInstance_setInstanceCount>` (uint32_t  number)                                 |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setInteger<api_MaterialInstance_setInteger>` (const char * name, const int32_t * value, int32_t  count = 1) |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setMatrix4<api_MaterialInstance_setMatrix4>` (const char * name, const Matrix4 * value, int32_t  count = 1) |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setSurfaceType<api_MaterialInstance_setSurfaceType>` (uint16_t  type)                                       |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setTexture<api_MaterialInstance_setTexture>` (const char * name, Texture * texture)                         |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setTransform<api_MaterialInstance_setTransform>` (Transform * transform)                                    |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setTransform<api_MaterialInstance_setTransform>` (const Matrix4 & transform)                                |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setVector2<api_MaterialInstance_setVector2>` (const char * name, const Vector2 * value, int32_t  count = 1) |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setVector3<api_MaterialInstance_setVector3>` (const char * name, const Vector3 * value, int32_t  count = 1) |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setVector4<api_MaterialInstance_setVector4>` (const char * name, const Vector4 * value, int32_t  count = 1) |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|      :ref:`uint16_t<api_uint16_t>` | :ref:`surfaceType<api_MaterialInstance_surfaceType>` () const                                                     |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|      :ref:`Texture<api_Texture>` * | :ref:`texture<api_MaterialInstance_texture>` (const char * name)                                                  |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|  :ref:`Transform<api_Transform>` * | :ref:`transform<api_MaterialInstance_transform>` ()                                                               |
+------------------------------------+-------------------------------------------------------------------------------------------------------------------+



.. _api_MaterialInstance_static:

Static Methods
--------------

None

.. _api_MaterialInstance_methods:

Methods Description
-------------------

.. _api_MaterialInstance_batch:

 void **MaterialInstance::batch** (:ref:`MaterialInstance<api_MaterialInstance>` & *instance*)

Batches a material *instance* to draw using GPU instancing.

----

.. _api_MaterialInstance_instanceCount:

 :ref:`uint32_t<api_uint32_t>`  **MaterialInstance::instanceCount** () const

Returns the number of GPU instances to be rendered.

**See also** setInstanceCount().

----

.. _api_MaterialInstance_instanceSize:

 :ref:`uint32_t<api_uint32_t>`  **MaterialInstance::instanceSize** () const

Returns a size of data per instance.

----

.. _api_MaterialInstance_material:

 :ref:`Material<api_Material>` * **MaterialInstance::material** () const

Getter for the base material associated with the instance.

----

.. _api_MaterialInstance_paramCount:

 :ref:`uint32_t<api_uint32_t>`  **MaterialInstance::paramCount** () const

Gets the total count of parameters in the material.

----

.. _api_MaterialInstance_paramName:

 std::string **MaterialInstance::paramName** (:ref:`uint32_t<api_uint32_t>`  *index*) const

Gets the name of a parameter by *index*.

----

.. _api_MaterialInstance_paramValue:

 :ref:`Variant<api_Variant>`  **MaterialInstance::paramValue** (:ref:`uint32_t<api_uint32_t>`  *index*) const

Gets the overridden or default value of a parameter by *index*.

----

.. _api_MaterialInstance_rawUniformBuffer:

 :ref:`ByteArray<api_ByteArray>` & **MaterialInstance::rawUniformBuffer** ()

Returns a reference to CPU part of uniform buffer. Developer can modify it for their needs.

----

.. _api_MaterialInstance_resetBatches:

 void **MaterialInstance::resetBatches** ()

Rests batch buffer.

----

.. _api_MaterialInstance_setBool:

 void **MaterialInstance::setBool** (char * *name*, bool * *value*, int32_t  *count* = 1)

Sets a boolean parameter with optional array support. Parameter *name* specifies a *name* of the boolean parameter. Parameter *value* pointer to the boolean *value* or array of boolean *value*s. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_setBufferValue:

 void **MaterialInstance::setBufferValue** (char * *name*, void * *value*)

Sets the *value* of a parameter with specified *name* in the uniform buffer.

----

.. _api_MaterialInstance_setFloat:

 void **MaterialInstance::setFloat** (char * *name*, float * *value*, int32_t  *count* = 1)

Sets a float parameter with optional array support. Parameter *name* specifies a *name* of the float parameter. Parameter *value* pointer to the float *value* or array of float *value*s. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_setInstanceCount:

 void **MaterialInstance::setInstanceCount** (:ref:`uint32_t<api_uint32_t>`  *number*)

Sets the *number* of GPU instances to be rendered.

**See also** instanceCount().

----

.. _api_MaterialInstance_setInteger:

 void **MaterialInstance::setInteger** (char * *name*, int32_t * *value*, int32_t  *count* = 1)

Sets a integer parameter with optional array support. Parameter *name* specifies a *name* of the integer parameter. Parameter *value* pointer to the integer *value* or array of integer *value*s. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_setMatrix4:

 void **MaterialInstance::setMatrix4** (char * *name*, :ref:`Matrix4<api_Matrix4>` * *value*, int32_t  *count* = 1)

Sets a Matrix4 parameter with optional array support. Parameter *name* specifies a *name* of the Matrix4 parameter. Parameter *value* pointer to the Matrix4 *value* or array of Matrix4 *value*s. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_setSurfaceType:

 void **MaterialInstance::setSurfaceType** (:ref:`uint16_t<api_uint16_t>`  *type*)

Sets the surface *type* associated with the material instance.

**See also** surfaceType().

----

.. _api_MaterialInstance_setTexture:

 void **MaterialInstance::setTexture** (char * *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* parameter with specified *name*.

**See also** *texture*().

----

.. _api_MaterialInstance_setTransform:

 void **MaterialInstance::setTransform** (:ref:`Transform<api_Transform>` * *transform*)

Sets the *transform* component to track it.

**See also** *transform*().

----

.. _api_MaterialInstance_setTransform:

 void **MaterialInstance::setTransform** (:ref:`Matrix4<api_Matrix4>` & *transform*)

Sets the *transform* matrix.

----

.. _api_MaterialInstance_setVector2:

 void **MaterialInstance::setVector2** (char * *name*, :ref:`Vector2<api_Vector2>` * *value*, int32_t  *count* = 1)

Sets a Vector2 parameter with optional array support. Parameter *name* specifies a *name* of the Vector2 parameter. Parameter *value* pointer to the Vector2 *value* or array of Vector2 *value*s. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_setVector3:

 void **MaterialInstance::setVector3** (char * *name*, :ref:`Vector3<api_Vector3>` * *value*, int32_t  *count* = 1)

Sets a Vector3 parameter with optional array support. Parameter *name* specifies a *name* of the Vector3 parameter. Parameter *value* pointer to the Vector3 *value* or array of Vector3 *value*s. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_setVector4:

 void **MaterialInstance::setVector4** (char * *name*, :ref:`Vector4<api_Vector4>` * *value*, int32_t  *count* = 1)

Sets a Vector4 parameter with optional array support. Parameter *name* specifies a *name* of the Vector4 parameter. Parameter *value* pointer to the Vector4 *value* or array of Vector4 *value*s. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_surfaceType:

 :ref:`uint16_t<api_uint16_t>`  **MaterialInstance::surfaceType** () const

Gets the surface type associated with the material instance.

**See also** setSurfaceType().

----

.. _api_MaterialInstance_texture:

 :ref:`Texture<api_Texture>` * **MaterialInstance::texture** (char * *name*)

Getter for the overridden texture associated with a specific parameter *name*.

**See also** setTexture().

----

.. _api_MaterialInstance_transform:

 :ref:`Transform<api_Transform>` * **MaterialInstance::transform** ()

Returns the a transform component.

**See also** setTransform().


