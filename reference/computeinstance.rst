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

+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|  :ref:`ComputeBuffer<api_ComputeBuffer>` * | :ref:`buffer<api_ComputeInstance_6f9308ae>` (const TString & name)                                                |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|  :ref:`ComputeShader<api_ComputeShader>` * | :ref:`compute<api_ComputeInstance_1c698435>` () const                                                             |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setBool<api_ComputeInstance_34cd8fe5>` (const TString & name, const bool * value, int32_t  count = 1)       |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setBuffer<api_ComputeInstance_1e793d2a>` (const TString & name, ComputeBuffer * buffer)                     |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setFloat<api_ComputeInstance_21aeb4d6>` (const TString & name, const float * value, int32_t  count = 1)     |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setInteger<api_ComputeInstance_279bfe46>` (const TString & name, const int32_t * value, int32_t  count = 1) |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setMatrix4<api_ComputeInstance_b095e368>` (const TString & name, const Matrix4 * value, int32_t  count = 1) |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setTexture<api_ComputeInstance_21bae37f>` (const TString & name, Texture * texture)                         |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setValue<api_ComputeInstance_28705963>` (const TString & name, const void * value)                          |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setVector2<api_ComputeInstance_f3170be2>` (const TString & name, const Vector2 * value, int32_t  count = 1) |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setVector3<api_ComputeInstance_ba05718f>` (const TString & name, const Vector3 * value, int32_t  count = 1) |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|                                       void | :ref:`setVector4<api_ComputeInstance_e106492d>` (const TString & name, const Vector4 * value, int32_t  count = 1) |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+
|              :ref:`Texture<api_Texture>` * | :ref:`texture<api_ComputeInstance_4b5ea61d>` (const TString & name)                                               |
+--------------------------------------------+-------------------------------------------------------------------------------------------------------------------+



.. _api_ComputeInstance_static:

Static Methods
--------------

None

.. _api_ComputeInstance_methods:

Methods Description
-------------------

.. _api_ComputeInstance_6f9308ae:

 :ref:`ComputeBuffer<api_ComputeBuffer>` * **ComputeInstance::buffer** (:ref:`TString<api_TString>` & *name*)

Gets the overridden compute buffer for a specified name.

**See also** setBuffer().

----

.. _api_ComputeInstance_1c698435:

 :ref:`ComputeShader<api_ComputeShader>` * **ComputeInstance::compute** () const

Gets the associated ComputeShader for this instance.

----

.. _api_ComputeInstance_34cd8fe5:

 void **ComputeInstance::setBool** (:ref:`TString<api_TString>` & *name*, bool * *value*, int32_t  *count* = 1)

Sets a boolean parameter with optional array support. Parameter *name* specifies a *name* of the boolean parameter. Parameter *value* pointer to the boolean *value* or array of boolean values. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_1e793d2a:

 void **ComputeInstance::setBuffer** (:ref:`TString<api_TString>` & *name*, :ref:`ComputeBuffer<api_ComputeBuffer>` * *buffer*)

Sets an overridden compute *buffer* for a specified name.

**See also** buffer().

----

.. _api_ComputeInstance_21aeb4d6:

 void **ComputeInstance::setFloat** (:ref:`TString<api_TString>` & *name*, float * *value*, int32_t  *count* = 1)

Sets a float parameter with optional array support. Parameter *name* specifies a *name* of the float parameter. Parameter *value* pointer to the float *value* or array of float values. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_279bfe46:

 void **ComputeInstance::setInteger** (:ref:`TString<api_TString>` & *name*, int32_t * *value*, int32_t  *count* = 1)

Sets a integer parameter with optional array support. Parameter *name* specifies a *name* of the integer parameter. Parameter *value* pointer to the integer *value* or array of integer values. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_b095e368:

 void **ComputeInstance::setMatrix4** (:ref:`TString<api_TString>` & *name*, :ref:`Matrix4<api_Matrix4>` * *value*, int32_t  *count* = 1)

Sets a Matrix4 parameter with optional array support. Parameter *name* specifies a *name* of the Matrix4 parameter. Parameter *value* pointer to the Matrix4 *value* or array of Matrix4 values. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_21bae37f:

 void **ComputeInstance::setTexture** (:ref:`TString<api_TString>` & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* parameter with specified name.

**See also** texture().

----

.. _api_ComputeInstance_28705963:

 void **ComputeInstance::setValue** (:ref:`TString<api_TString>` & *name*, void * *value*)

Sets the *value* of a parameter with specified *name* in the uniform buffer.

----

.. _api_ComputeInstance_f3170be2:

 void **ComputeInstance::setVector2** (:ref:`TString<api_TString>` & *name*, :ref:`Vector2<api_Vector2>` * *value*, int32_t  *count* = 1)

Sets a Vector2 parameter with optional array support. Parameter *name* specifies a *name* of the Vector2 parameter. Parameter *value* pointer to the Vector2 *value* or array of Vector2 values. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_ba05718f:

 void **ComputeInstance::setVector3** (:ref:`TString<api_TString>` & *name*, :ref:`Vector3<api_Vector3>` * *value*, int32_t  *count* = 1)

Sets a Vector3 parameter with optional array support. Parameter *name* specifies a *name* of the Vector3 parameter. Parameter *value* pointer to the Vector3 *value* or array of Vector3 values. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_e106492d:

 void **ComputeInstance::setVector4** (:ref:`TString<api_TString>` & *name*, :ref:`Vector4<api_Vector4>` * *value*, int32_t  *count* = 1)

Sets a Vector4 parameter with optional array support. Parameter *name* specifies a *name* of the Vector4 parameter. Parameter *value* pointer to the Vector4 *value* or array of Vector4 values. Parameter *count* a number of elements in the array.

----

.. _api_ComputeInstance_4b5ea61d:

 :ref:`Texture<api_Texture>` * **ComputeInstance::texture** (:ref:`TString<api_TString>` & *name*)

Gets the overridden texture for a specified name.

**See also** setTexture().


