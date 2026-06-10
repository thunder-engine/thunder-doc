.. _api_Variant:

Variant
=======

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

+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_b56c8e01>` ()                               |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_5b0843e9>` (MetaType::Type  type)           |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_2e054c7f>` (bool  value)                    |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_473f086e>` (const ByteArray & value)        |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_01263bd5>` (const Matrix3 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_abd91c32>` (const Matrix4 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_a216d5e3>` (const Quaternion & value)       |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_29da5be1>` (const TString & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_f5c9a786>` (const VariantList & value)      |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_fb850cad>` (const VariantMap & value)       |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_e679d012>` (const Vector2 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_6db3a295>` (const Vector3 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_78394b6e>` (const Vector4 & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_0182d6a7>` (const char * value)             |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_6a4f8bd7>` (float  value)                   |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_4806e71f>` (int  value)                     |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_6b2583ea>` (unsigned int  value)            |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_9fa6b7c4>` (uint32_t  type, void * copy)    |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                         | :ref:`Variant<api_Variant_3ad5fce2>` (const Variant & value)          |
+-----------------------------------------+-----------------------------------------------------------------------+
|              template <typename T> bool | :ref:`canConvert<api_Variant_a127308c>` () const                      |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`canConvert<api_Variant_7f3edc69>` (uint32_t  type) const        |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    void | :ref:`clear<api_Variant_b8f73a16>` ()                                 |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`convert<api_Variant_0c92ba16>` (uint32_t  type)                 |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    void | :ref:`data<api_Variant_89d6cf42>` () const                            |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`isValid<api_Variant_6df10bea>` () const                         |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`toBool<api_Variant_ab5d7038>` () const                          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                         const ByteArray | :ref:`toByteArray<api_Variant_3c14d9e8>` () const                     |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                   float | :ref:`toFloat<api_Variant_73254e10>` () const                         |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                     int | :ref:`toInt<api_Variant_dca7b96e>` () const                           |
+-----------------------------------------+-----------------------------------------------------------------------+
|                       const VariantList | :ref:`toList<api_Variant_79152af6>` () const                          |
+-----------------------------------------+-----------------------------------------------------------------------+
|                        const VariantMap | :ref:`toMap<api_Variant_3abd689e>` () const                           |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Matrix3<api_Matrix3>` | :ref:`toMatrix3<api_Variant_a15ed7b4>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Matrix4<api_Matrix4>` | :ref:`toMatrix4<api_Variant_f7132ba0>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
| const :ref:`Quaternion<api_Quaternion>` | :ref:`toQuaternion<api_Variant_492ced06>` () const                    |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`TString<api_TString>` | :ref:`toString<api_Variant_56a37b14>` () const                        |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Vector2<api_Vector2>` | :ref:`toVector2<api_Variant_7902d34a>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Vector3<api_Vector3>` | :ref:`toVector3<api_Variant_60321b98>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
|       const :ref:`Vector4<api_Vector4>` | :ref:`toVector4<api_Variant_50469f2e>` () const                       |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                uint32_t | :ref:`type<api_Variant_90a273c8>` () const                            |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                uint32_t | :ref:`userType<api_Variant_d950aec6>` () const                        |
+-----------------------------------------+-----------------------------------------------------------------------+
|                 template <typename T> T | :ref:`value<api_Variant_d76bce9a>` () const                           |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`operator!=<api_Variant_de1a67f2>` (const Variant & right) const |
+-----------------------------------------+-----------------------------------------------------------------------+
|           :ref:`Variant<api_Variant>` & | :ref:`operator=<api_Variant_cdbe5792>` (const Variant & value)        |
+-----------------------------------------+-----------------------------------------------------------------------+
|                                    bool | :ref:`operator==<api_Variant_2641df09>` (const Variant & right) const |
+-----------------------------------------+-----------------------------------------------------------------------+



.. _api_Variant_static:

Static Methods
--------------

+---------------------------------------------------+----------------------------------------------------------+
| template <typename T> :ref:`Variant<api_Variant>` | :ref:`fromValue<api_Variant_4560cd19>` (const T & value) |
+---------------------------------------------------+----------------------------------------------------------+

.. _api_Variant_methods:

Methods Description
-------------------

.. _api_Variant_b56c8e01:

**Variant::Variant** ()

Constructs an invalid variant.

----

.. _api_Variant_5b0843e9:

**Variant::Variant** (:ref:`MetaType::Type<api_MetaType_Type>`  *type*)

Constructs an uninitialized variant of type.

----

.. _api_Variant_2e054c7f:

**Variant::Variant** (bool  *value*)

Constructs a new variant with a boolean value.

----

.. _api_Variant_473f086e:

**Variant::Variant** (ByteArray & *value*)

Constructs a new variant with a ByteArray value.

----

.. _api_Variant_01263bd5:

**Variant::Variant** (:ref:`Matrix3<api_Matrix3>` & *value*)

Constructs a new variant with a Matrix3 value.

----

.. _api_Variant_abd91c32:

**Variant::Variant** (:ref:`Matrix4<api_Matrix4>` & *value*)

Constructs a new variant with a Matrix4 value.

----

.. _api_Variant_a216d5e3:

**Variant::Variant** (:ref:`Quaternion<api_Quaternion>` & *value*)

Constructs a new variant with a Quaternion value.

----

.. _api_Variant_29da5be1:

**Variant::Variant** (:ref:`TString<api_TString>` & *value*)

Constructs a new variant with a string value.

----

.. _api_Variant_f5c9a786:

**Variant::Variant** (VariantList & *value*)

Constructs a new variant with a list of variants value.

----

.. _api_Variant_fb850cad:

**Variant::Variant** (VariantMap & *value*)

Constructs a new variant with a map of variants value.

----

.. _api_Variant_e679d012:

**Variant::Variant** (:ref:`Vector2<api_Vector2>` & *value*)

Constructs a new variant with a Vector2 value.

----

.. _api_Variant_6db3a295:

**Variant::Variant** (:ref:`Vector3<api_Vector3>` & *value*)

Constructs a new variant with a Vector3 value.

----

.. _api_Variant_78394b6e:

**Variant::Variant** (:ref:`Vector4<api_Vector4>` & *value*)

Constructs a new variant with a Vector4 value.

----

.. _api_Variant_0182d6a7:

**Variant::Variant** (char * *value*)

Constructs a new variant with a string value.

----

.. _api_Variant_6a4f8bd7:

**Variant::Variant** (float  *value*)

Constructs a new variant with a floating point value.

----

.. _api_Variant_4806e71f:

**Variant::Variant** (int  *value*)

Constructs a new variant with an integer value.

----

.. _api_Variant_6b2583ea:

**Variant::Variant** (int  *value*)

Constructs a new variant with an integer value.

----

.. _api_Variant_9fa6b7c4:

**Variant::Variant** (uint32_t  *type*, void * *copy*)

Constructs a new variant of *type* and initialized with *copy* value.

----

.. _api_Variant_3ad5fce2:

**Variant::Variant** (:ref:`Variant<api_Variant>` & *value*)

Constructs a copy of variant value.

----

.. _api_Variant_a127308c:

template <typename T> bool **Variant::canConvert** () const

Returns the possibility of conversion for this variant to type T.

**See also** value and MetaType::convert.

----

.. _api_Variant_7f3edc69:

 bool **Variant::canConvert** (uint32_t  *type*) const

Returns true if variant converted to a type; otherwise return false.

----

.. _api_Variant_b8f73a16:

 void **Variant::clear** ()

Frees used resources and make this variant an invalid.

----

.. _api_Variant_0c92ba16:

 bool **Variant::convert** (uint32_t  *type*)

Casts the variant to the requested type.

Returns true if the current *type* of the variant was successfully cast; otherwise returns false.

----

.. _api_Variant_89d6cf42:

 void **Variant::data** () const

Returns pure pointer to value data.

----

.. _api_Variant_4560cd19:

template <typename T> :ref:`Variant<api_Variant>`  **Variant::fromValue** (T & *value*)

Returns the variant containing provided value.

Returns an invalid variant if unknown *value* type.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_6df10bea:

 bool **Variant::isValid** () const

Returns true if variant value is valid; otherwise return false.

----

.. _api_Variant_ab5d7038:

 bool **Variant::toBool** () const

Returns variant as a bool value if variant has a type MetaType::BOOLEAN. Otherwise it tries to convert existing value to a bool.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_3c14d9e8:

const ByteArray **Variant::toByteArray** () const

Returns variant as a ByteArray value if variant has a type MetaType::BYTEARRAY. Otherwise it tries to convert existing value to a ByteArray.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_73254e10:

 float **Variant::toFloat** () const

Returns variant as a float value if variant has a type MetaType::FLOAT. Otherwise it tries to convert existing value to a float.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_dca7b96e:

 int **Variant::toInt** () const

Returns variant as an integer value if variant has a type MetaType::INTEGER. Otherwise it tries to convert existing value to an integer.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_79152af6:

const VariantList **Variant::toList** () const

Returns variant as a variant list value if variant has a type MetaType::VARIANTLIST. Otherwise it tries to convert existing value to a variant list.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_3abd689e:

const VariantMap **Variant::toMap** () const

Returns variant as a variant map value if variant has a type MetaType::VARIANTMAP. Otherwise it tries to convert existing value to a variant map.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_a15ed7b4:

const :ref:`Matrix3<api_Matrix3>`  **Variant::toMatrix3** () const

Returns variant as a Matrix3 value if variant has a type MetaType::MATRIX3. Otherwise it tries to convert existing value to a Matrix3.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_f7132ba0:

const :ref:`Matrix4<api_Matrix4>`  **Variant::toMatrix4** () const

Returns variant as a Matrix4 value if variant has a type MetaType::MATRIX4. Otherwise it tries to convert existing value to a Matrix4.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_492ced06:

const :ref:`Quaternion<api_Quaternion>`  **Variant::toQuaternion** () const

Returns variant as a Quaternion value if variant has a type MetaType::QUATERNION. Otherwise it tries to convert existing value to a Quaternion.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_56a37b14:

const :ref:`TString<api_TString>`  **Variant::toString** () const

Returns variant as a string value if variant has a type MetaType::STRING. Otherwise it tries to convert existing value to a string.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_7902d34a:

const :ref:`Vector2<api_Vector2>`  **Variant::toVector2** () const

Returns variant as a Vector2 value if variant has a type MetaType::VECTOR2. Otherwise it tries to convert existing value to a Vector2.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_60321b98:

const :ref:`Vector3<api_Vector3>`  **Variant::toVector3** () const

Returns variant as a Vector3 value if variant has a type MetaType::VECTOR3. Otherwise it tries to convert existing value to a Vector3.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_50469f2e:

const :ref:`Vector4<api_Vector4>`  **Variant::toVector4** () const

Returns variant as a Vector4 value if variant has a type MetaType::VECTOR4. Otherwise it tries to convert existing value to a Vector4.

**See also** value, canConvert, and MetaType::convert.

----

.. _api_Variant_90a273c8:

 uint32_t **Variant::type** () const

Returns type of variant value.


**Note:** If type of variant is user defined then fonction return MetaType::USERTYPE. To get the real type id use userType.


**See also** userType.

----

.. _api_Variant_d950aec6:

 uint32_t **Variant::userType** () const

Returns user type of variant value.

**See also** type.

----

.. _api_Variant_d76bce9a:

template <typename T> T **Variant::value** () const

Returns contained value which cast or converted to type T.

Returns default T value if invalid variant or variant can not be converted to type T.

**See also** fromValue, canConvert, and MetaType::convert.

----

.. _api_Variant_de1a67f2:

 bool **Variant::operator!=** (:ref:`Variant<api_Variant>` & *right*) const

Compares a this variant with variant *right* value. Returns true if variants are NOT equal; otherwise returns false.

----

.. _api_Variant_cdbe5792:

 :ref:`Variant<api_Variant>` & **Variant::operator=** (:ref:`Variant<api_Variant>` & *value*)

Assigns the *value* of the variant to this variant.

----

.. _api_Variant_2641df09:

 bool **Variant::operator==** (:ref:`Variant<api_Variant>` & *right*) const

Compares a this variant with variant *right* value. Returns true if variants are equal; otherwise returns false.


