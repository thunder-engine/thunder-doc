.. _api_Variant:

Variant Class
=============

Inherited: None

.. _api_Variant_description:

Description
-----------

Variant can contain values with common data types and return information about this types. Also Variant can convert cantained values to another data types using MetaType::convert function. Example:

::

    Variant variant; // This variant invalid for now
    variant     = Variant(true); // Now varinat contain boolean true value
    variant     = Variant(42); // Now varinat contain integer 42 value
    string str  = variant.toString() + " is the answer for everything"; // Now string contain string "42 is the answer for everything" value

Object based classes can be automatically registered in meta type system to be using as Variant objects. Example:

::

    MyObject::registerClassFactory();

And then:

::

    MyObject *origin = new MyObject;
    Variant variant = Variant::fromValue(origin);
    ....
    MyObject *object = variant.value<MyObject *>();



.. _api_Variant_public:

Public Methods
--------------

+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const Variant & value)             |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (int  type, void * copy)            |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const Matrix4 & value)             |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const Matrix3 & value)             |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const Quaternion & value)          |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const Vector4 & value)             |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const Vector3 & value)             |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const Vector2 & value)             |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const ByteArray & value)           |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const VariantList & value)         |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const VariantMap & value)          |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const std::string & value)         |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (const char * value)                |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (float  value)                      |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (unsigned int  value)               |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (int  value)                        |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (bool  value)                       |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` (MetaType::Type  type)              |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                           | :ref:`Variant<api_Variant_Variant>` ()                                  |
+-------------------------------------------+-------------------------------------------------------------------------+
|             :ref:`Variant<api_Variant>` & | :ref:`operator=<api_Variant_operator=>` (const Variant & value)         |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                      bool | :ref:`canConvert<api_Variant_canConvert>` (int  type) const             |
+-------------------------------------------+-------------------------------------------------------------------------+
|                template <typename T> bool | :ref:`canConvert<api_Variant_canConvert>` () const                      |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                      void | :ref:`clear<api_Variant_clear>` ()                                      |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                      void | :ref:`data<api_Variant_data>` () const                                  |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                      bool | :ref:`isValid<api_Variant_isValid>` () const                            |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                      bool | :ref:`toBool<api_Variant_toBool>` () const                              |
+-------------------------------------------+-------------------------------------------------------------------------+
|     const :ref:`ByteArray<api_ByteArray>` | :ref:`toByteArray<api_Variant_toByteArray>` () const                    |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                     float | :ref:`toFloat<api_Variant_toFloat>` () const                            |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                       int | :ref:`toInt<api_Variant_toInt>` () const                                |
+-------------------------------------------+-------------------------------------------------------------------------+
| const :ref:`VariantList<api_VariantList>` | :ref:`toList<api_Variant_toList>` () const                              |
+-------------------------------------------+-------------------------------------------------------------------------+
|   const :ref:`VariantMap<api_VariantMap>` | :ref:`toMap<api_Variant_toMap>` () const                                |
+-------------------------------------------+-------------------------------------------------------------------------+
|         const :ref:`Matrix3<api_Matrix3>` | :ref:`toMatrix3<api_Variant_toMatrix3>` () const                        |
+-------------------------------------------+-------------------------------------------------------------------------+
|         const :ref:`Matrix4<api_Matrix4>` | :ref:`toMatrix4<api_Variant_toMatrix4>` () const                        |
+-------------------------------------------+-------------------------------------------------------------------------+
|   const :ref:`Quaternion<api_Quaternion>` | :ref:`toQuaternion<api_Variant_toQuaternion>` () const                  |
+-------------------------------------------+-------------------------------------------------------------------------+
|                         const std::string | :ref:`toString<api_Variant_toString>` () const                          |
+-------------------------------------------+-------------------------------------------------------------------------+
|         const :ref:`Vector2<api_Vector2>` | :ref:`toVector2<api_Variant_toVector2>` () const                        |
+-------------------------------------------+-------------------------------------------------------------------------+
|         const :ref:`Vector3<api_Vector3>` | :ref:`toVector3<api_Variant_toVector3>` () const                        |
+-------------------------------------------+-------------------------------------------------------------------------+
|         const :ref:`Vector4<api_Vector4>` | :ref:`toVector4<api_Variant_toVector4>` () const                        |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                       int | :ref:`type<api_Variant_type>` () const                                  |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                       int | :ref:`userType<api_Variant_userType>` () const                          |
+-------------------------------------------+-------------------------------------------------------------------------+
|                   template <typename T> T | :ref:`value<api_Variant_value>` () const                                |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                      bool | :ref:`operator!=<api_Variant_operator!=>` (const Variant & right) const |
+-------------------------------------------+-------------------------------------------------------------------------+
|                                      bool | :ref:`operator==<api_Variant_operator==>` (const Variant & right) const |
+-------------------------------------------+-------------------------------------------------------------------------+



.. _api_Variant_static:

Static Methods
--------------

+---------------------------------------------------+-----------------------------------------------------------+
| template <typename T> :ref:`Variant<api_Variant>` | :ref:`fromValue<api_Variant_fromValue>` (const T & value) |
+---------------------------------------------------+-----------------------------------------------------------+

.. _api_Variant_methods:

Methods Description
-------------------

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`Variant<api_Variant>` & *value*)

Constructs a copy of variant *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (int  *type*, void * *copy*)

Constructs a new variant of *type* and initialized with *copy* value.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`Matrix4<api_Matrix4>` & *value*)

Constructs a new variant with a Matrix4 *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`Matrix3<api_Matrix3>` & *value*)

Constructs a new variant with a Matrix3 *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`Quaternion<api_Quaternion>` & *value*)

Constructs a new variant with a Quaternion *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`Vector4<api_Vector4>` & *value*)

Constructs a new variant with a Vector4 *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`Vector3<api_Vector3>` & *value*)

Constructs a new variant with a Vector3 *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`Vector2<api_Vector2>` & *value*)

Constructs a new variant with a Vector2 *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`ByteArray<api_ByteArray>` & *value*)

Constructs a new variant with a ByteArray *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`VariantList<api_VariantList>` & *value*)

Constructs a new variant with a list of variants *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`VariantMap<api_VariantMap>` & *value*)

Constructs a new variant with a map of variants *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (std::string & *value*)

Constructs a new variant with a string *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (char * *value*)

Constructs a new variant with a string *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (float  *value*)

Constructs a new variant with a floating point *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (int  *value*)

Constructs a new variant with an integer *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (int  *value*)

Constructs a new variant with an integer *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (bool  *value*)

Constructs a new variant with a boolean *value*.

----

.. _api_Variant_Variant:

**Variant::Variant** (:ref:`MetaType::Type<api_MetaType::Type>`  *type*)

Constructs an uninitialized variant of *type*.

----

.. _api_Variant_Variant:

**Variant::Variant** ()

Constructs an invalid variant.

----

.. _api_Variant_operator=:

 :ref:`Variant<api_Variant>`& **Variant::operator=** (:ref:`Variant<api_Variant>` & *value*)

Assigns the *value* of the variant to this variant.

----

.. _api_Variant_canConvert:

 bool **Variant::canConvert** (int  *type*) const

Returns true if variant converted to a *type*; otherwise return false.

----

.. _api_Variant_canConvert:

template <typename T> bool **Variant::canConvert** () const

Returns the possibility of conversion for this variant to type T.

**See also** value and MetaType::convert.

----

.. _api_Variant_clear:

 void **Variant::clear** ()

Frees used resources and make this variant an invalid.

----

.. _api_Variant_data:

 void **Variant::data** () const

Returns pure pointer to value data.

----

.. _api_Variant_fromValue:

template <typename T> :ref:`Variant<api_Variant>` **Variant::fromValue** (T & *value*)

Returns the variant containing provided *value*.

Returns an invalid variant if unknown *value* type.

**See also** *value*, canConvert, and MetaType::convert.

----

.. _api_Variant_isValid:

 bool **Variant::isValid** () const

Returns true if variant value is valid; otherwise return false.

----

.. _api_Variant_toBool:

 bool **Variant::toBool** () const

Returns variant as a bool value if variant has a type MetaType::BOOLEAN. Otherwise it tries to convert existing value to a bool.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toByteArray:

const :ref:`ByteArray<api_ByteArray>` **Variant::toByteArray** () const

Returns variant as a ByteArray value if variant has a type MetaType::BYTEARRAY. Otherwise it tries to convert existing value to a ByteArray.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toFloat:

 float **Variant::toFloat** () const

Returns variant as a float value if variant has a type MetaType::FLOAT. Otherwise it tries to convert existing value to a float.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toInt:

 int **Variant::toInt** () const

Returns variant as an integer value if variant has a type MetaType::INTEGER. Otherwise it tries to convert existing value to an integer.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toList:

const :ref:`VariantList<api_VariantList>` **Variant::toList** () const

Returns variant as a variant list value if variant has a type MetaType::VARIANTLIST. Otherwise it tries to convert existing value to a variant list.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toMap:

const :ref:`VariantMap<api_VariantMap>` **Variant::toMap** () const

Returns variant as a variant map value if variant has a type MetaType::VARIANTMAP. Otherwise it tries to convert existing value to a variant map.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toMatrix3:

const :ref:`Matrix3<api_Matrix3>` **Variant::toMatrix3** () const

Returns variant as a Matrix3 value if variant has a type MetaType::MATRIX3. Otherwise it tries to convert existing value to a Matrix3.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toMatrix4:

const :ref:`Matrix4<api_Matrix4>` **Variant::toMatrix4** () const

Returns variant as a Matrix4 value if variant has a type MetaType::MATRIX4. Otherwise it tries to convert existing value to a Matrix4.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toQuaternion:

const :ref:`Quaternion<api_Quaternion>` **Variant::toQuaternion** () const

Returns variant as a Quaternion value if variant has a type MetaType::QUATERNION. Otherwise it tries to convert existing value to a Quaternion.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toString:

const std::string **Variant::toString** () const

Returns variant as a string value if variant has a type MetaType::STRING. Otherwise it tries to convert existing value to a string.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toVector2:

const :ref:`Vector2<api_Vector2>` **Variant::toVector2** () const

Returns variant as a Vector2 value if variant has a type MetaType::VECTOR2. Otherwise it tries to convert existing value to a Vector2.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toVector3:

const :ref:`Vector3<api_Vector3>` **Variant::toVector3** () const

Returns variant as a Vector3 value if variant has a type MetaType::VECTOR3. Otherwise it tries to convert existing value to a Vector3.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_toVector4:

const :ref:`Vector4<api_Vector4>` **Variant::toVector4** () const

Returns variant as a Vector4 value if variant has a type MetaType::VECTOR4. Otherwise it tries to convert existing value to a Vector4.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_type:

 int **Variant::type** () const

Returns type of variant value.

**Note:** If type of variant is user defined then fonction return MetaType::USERTYPE. To get the real type id use userType.

**See also** userType.

----

.. _api_Variant_userType:

 int **Variant::userType** () const

Returns user type of variant value.

**See also** type.

----

.. _api_Variant_value:

template <typename T> T **Variant::value** () const

Returns contained value which cast or converted to type T.

Returns default T value if invalid variant or variant can not be converted to type T.

**See also** fromValue, canConvert, and MetaType::convert.

----

.. _api_Variant_operator!=:

 bool **Variant::operator!=** (:ref:`Variant<api_Variant>` & *right*) const

Compares a this variant with variant *right* value. Returns true if variants are NOT equal; otherwise returns false.

----

.. _api_Variant_operator==:

 bool **Variant::operator==** (:ref:`Variant<api_Variant>` & *right*) const

Compares a this variant with variant *right* value. Returns true if variants are equal; otherwise returns false.


