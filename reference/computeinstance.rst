.. _api_ComputeInstance:

ComputeInstance
===============

Inherited: None

.. _api_ComputeInstance_description:

Description
-----------



.. _api_ComputeInstance_public:

Public Methods
--------------

+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|  :ref:`ComputeBuffer<api_ComputeBuffer>` * | :ref:`buffer<api_ComputeInstance_buffer>` (const char * name)                                                    |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|  :ref:`ComputeShader<api_ComputeShader>` * | :ref:`compute<api_ComputeInstance_compute>` () const                                                             |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setBool<api_ComputeInstance_setBool>` (const char * name, const bool * value, int32_t  count = 1)          |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setBuffer<api_ComputeInstance_setBuffer>` (const char * name, ComputeBuffer * buffer)                      |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setFloat<api_ComputeInstance_setFloat>` (const char * name, const float * value, int32_t  count = 1)       |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setInteger<api_ComputeInstance_setInteger>` (const char * name, const int32_t * value, int32_t  count = 1) |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setMatrix4<api_ComputeInstance_setMatrix4>` (const char * name, const Matrix4 * value, int32_t  count = 1) |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setTexture<api_ComputeInstance_setTexture>` (const char * name, Texture * texture)                         |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setValue<api_ComputeInstance_setValue>` (const char * name, const void * value)                            |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setVector2<api_ComputeInstance_setVector2>` (const char * name, const Vector2 * value, int32_t  count = 1) |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setVector3<api_ComputeInstance_setVector3>` (const char * name, const Vector3 * value, int32_t  count = 1) |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setVector4<api_ComputeInstance_setVector4>` (const char * name, const Vector4 * value, int32_t  count = 1) |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+
|              :ref:`Texture<api_Texture>` * | :ref:`texture<api_ComputeInstance_texture>` (const char * name)                                                  |
+--------------------------------------------+------------------------------------------------------------------------------------------------------------------+



.. _api_ComputeInstance_static:

Static Methods
--------------

None

.. _api_ComputeInstance_methods:

Methods Description
-------------------

.. _api_ComputeInstance_buffer:

 :ref:`ComputeBuffer<api_ComputeBuffer>` * **ComputeInstance::buffer** (char * *name*)

Gets the overridden compute buffer for a specified *name*.

**See also** setBuffer().

----

.. _api_ComputeInstance_compute:

 :ref:`ComputeShader<api_ComputeShader>` * **ComputeInstance::compute** () const

Gets the associated ComputeShader for this instance.

----

.. _api_ComputeInstance_setBool:

 void **ComputeInstance::setBool** (char * *name*, bool * *value*, int32_t  *count* = 1)

Sets a boolean parameter with optional array support. Parameter *name* specifies a *name* of the boolean parameter. Parameter *value* pointer to the boolean *value* or array of boolean *value*s. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_setBuffer:

 void **ComputeInstance::setBuffer** (char * *name*, :ref:`ComputeBuffer<api_ComputeBuffer>` * *buffer*)

Sets an overridden compute *buffer* for a specified *name*.

**See also** *buffer*().

----

.. _api_ComputeInstance_setFloat:

 void **ComputeInstance::setFloat** (char * *name*, float * *value*, int32_t  *count* = 1)

Sets a float parameter with optional array support. Parameter *name* specifies a *name* of the float parameter. Parameter *value* pointer to the float *value* or array of float *value*s. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_setInteger:

 void **ComputeInstance::setInteger** (char * *name*, int32_t * *value*, int32_t  *count* = 1)

Sets a integer parameter with optional array support. Parameter *name* specifies a *name* of the integer parameter. Parameter *value* pointer to the integer *value* or array of integer *value*s. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_setMatrix4:

 void **ComputeInstance::setMatrix4** (char * *name*, :ref:`Matrix4<api_Matrix4>` * *value*, int32_t  *count* = 1)

Sets a Matrix4 parameter with optional array support. Parameter *name* specifies a *name* of the Matrix4 parameter. Parameter *value* pointer to the Matrix4 *value* or array of Matrix4 *value*s. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_setTexture:

 void **ComputeInstance::setTexture** (char * *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* parameter with specified *name*.

**See also** *texture*().

----

.. _api_ComputeInstance_setValue:

 void **ComputeInstance::setValue** (char * *name*, void * *value*)

Sets the *value* of a parameter with specified *name* in the uniform buffer.

----

.. _api_ComputeInstance_setVector2:

 void **ComputeInstance::setVector2** (char * *name*, :ref:`Vector2<api_Vector2>` * *value*, int32_t  *count* = 1)

Sets a Vector2 parameter with optional array support. Parameter *name* specifies a *name* of the Vector2 parameter. Parameter *value* pointer to the Vector2 *value* or array of Vector2 *value*s. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_setVector3:

 void **ComputeInstance::setVector3** (char * *name*, :ref:`Vector3<api_Vector3>` * *value*, int32_t  *count* = 1)

Sets a Vector3 parameter with optional array support. Parameter *name* specifies a *name* of the Vector3 parameter. Parameter *value* pointer to the Vector3 *value* or array of Vector3 *value*s. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_setVector4:

 void **ComputeInstance::setVector4** (char * *name*, :ref:`Vector4<api_Vector4>` * *value*, int32_t  *count* = 1)

Sets a Vector4 parameter with optional array support. Parameter *name* specifies a *name* of the Vector4 parameter. Parameter *value* pointer to the Vector4 *value* or array of Vector4 *value*s. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_texture:

 :ref:`Texture<api_Texture>` * **ComputeInstance::texture** (char * *name*)

Gets the overridden texture for a specified *name*.

**See also** setTexture().


