.. _api_Material:
Material Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Material_description:
Description
-----------

A Material is a resource which can be applied to a Mesh to control the visual look of the scene.



.. _api_Material_public:
Public Methods
--------------

+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                                 | :ref:`Material<api_Material_Material>` ()                                                              |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                                                 | :ref:`~Material<api_Material_~Material>` ()                                                            |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`blendMode<api_Material_blendMode>` () const                                                      |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`clear<api_Material_clear>` ()                                                                    |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
| :ref:`MaterialInstance<api_MaterialInstance>` * | :ref:`createInstance<api_Material_createInstance>` (Material::SurfaceType  type = SurfaceType::Static) |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`depthTest<api_Material_depthTest>` () const                                                      |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`depthWrite<api_Material_depthWrite>` () const                                                    |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`bool<api_bool>` | :ref:`doubleSided<api_Material_doubleSided>` () const                                                  |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`lightModel<api_Material_lightModel>` () const                                                    |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                             :ref:`int<api_int>` | :ref:`materialType<api_Material_materialType>` () const                                                |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setBlendMode<api_Material_setBlendMode>` (int  mode)                                             |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setDepthTest<api_Material_setDepthTest>` (bool  test)                                            |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setDepthWrite<api_Material_setDepthWrite>` (bool  write)                                         |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setDoubleSided<api_Material_setDoubleSided>` (bool  flag)                                        |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setLightModel<api_Material_setLightModel>` (int  model)                                          |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setMaterialType<api_Material_setMaterialType>` (int  type)                                       |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+
|                           :ref:`void<api_void>` | :ref:`setTexture<api_Material_setTexture>` (const std::string & name, Texture * texture)               |
+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+

.. _api_Material_enums:
Public Enums
--------------

.. _api_Material_BlendType:
**enum Material::BlendType**

.. _api_Material_LightModelType:
**enum Material::LightModelType**

.. _api_Material_MaterialType:
**enum Material::MaterialType**

.. _api_Material_SurfaceType:
**enum Material::SurfaceType**

.. _api_Material_TextureMap:
**enum Material::TextureMap**

.. _api_Material_UniformMap:
**enum Material::UniformMap**



.. _api_Material_static:
Static Methods
--------------

+-------------------------------------------------------------------+-----------------------------------------------+
|         :ref:`const MetaEnum::Table<api_const MetaEnum::Table>` * | :ref:`enums<api_Material_enums>` ()           |
+-------------------------------------------------------------------+-----------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Material_methods>` ()       |
+-------------------------------------------------------------------+-----------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Material_properties>` () |
+-------------------------------------------------------------------+-----------------------------------------------+

.. _api_Material_methods:
Methods Description
-------------------

.. _api_Material_Material:

**Material::Material** ()

Default constructs an instance of Material.

----

.. _api_Material_~Material:

**Material::~Material** ()

Destroys the instance of Material. The destructor is virtual.

----

.. _api_Material_blendMode:

:ref:`int<api_int>`  **Material::blendMode** () const

Returns current blend mode for the material. For more detalse please refer to Material::BlendType enum.

**See also** setBlendMode().

----

.. _api_Material_clear:

:ref:`void<api_void>`  **Material::clear** ()

Removes all attached textures from the material.

----

.. _api_Material_createInstance:

:ref:`MaterialInstance<api_MaterialInstance>` * **Material::createInstance** (:ref:`Material::SurfaceType<api_Material::SurfaceType>`  *type* = SurfaceType::Static)

Returns a new instance for the material with the provided surface *type*.

----

.. _api_Material_depthTest:

:ref:`bool<api_bool>`  **Material::depthTest** () const

Returns true if depth test was enabled; otherwise returns false.

**See also** setDepthTest().

----

.. _api_Material_depthWrite:

:ref:`bool<api_bool>`  **Material::depthWrite** () const

Returns true if write opertaion to the depth buffer was enabled; otherwise returns false.

**See also** setDepthWrite().

----

.. _api_Material_doubleSided:

:ref:`bool<api_bool>`  **Material::doubleSided** () const

Returns true if mas marked as double-sided; otherwise returns false.

**See also** setDoubleSided().

----

.. _api_Material_enums:

:ref:`const MetaEnum::Table<api_const MetaEnum::Table>` * **Material::enums** ()

----

.. _api_Material_lightModel:

:ref:`int<api_int>`  **Material::lightModel** () const

Returns current light model for the material. For more detalse please refer to Material::LightModelType enum.

**See also** setLightModel().

----

.. _api_Material_materialType:

:ref:`int<api_int>`  **Material::materialType** () const

Returns current material type. For more detalse please refer to Material::MaterialType enum.

**See also** setMaterialType().

----

.. _api_Material_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Material::methods** ()

----

.. _api_Material_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Material::properties** ()

----

.. _api_Material_setBlendMode:

:ref:`void<api_void>`  **Material::setBlendMode** (:ref:`int<api_int>`  *mode*)

Sets a new blend *mode* for the material. For more detalse please refer to Material::BlendType enum.

**See also** blendMode().

----

.. _api_Material_setDepthTest:

:ref:`void<api_void>`  **Material::setDepthTest** (:ref:`bool<api_bool>`  *test*)

Enables or disables a depth *test* for the material.

**See also** depthTest().

----

.. _api_Material_setDepthWrite:

:ref:`void<api_void>`  **Material::setDepthWrite** (:ref:`bool<api_bool>`  *write*)

Enables or disables a *write* operation to the depth buffer.

**See also** depthWrite().

----

.. _api_Material_setDoubleSided:

:ref:`void<api_void>`  **Material::setDoubleSided** (:ref:`bool<api_bool>`  *flag*)

Enables or disables the double-sided *flag* for the material.

**See also** doubleSided().

----

.. _api_Material_setLightModel:

:ref:`void<api_void>`  **Material::setLightModel** (:ref:`int<api_int>`  *model*)

Sets a new light *model* for the material. For more detalse please refer to Material::LightModelType enum.

**See also** lightModel().

----

.. _api_Material_setMaterialType:

:ref:`void<api_void>`  **Material::setMaterialType** (:ref:`int<api_int>`  *type*)

Sets new material *type*. For more detalse please refer to Material::MaterialType enum.

**See also** materialType().

----

.. _api_Material_setTexture:

:ref:`void<api_void>`  **Material::setTexture** (:ref:`std::string<api_std::string>` & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* with a given *name* for the material.

----


