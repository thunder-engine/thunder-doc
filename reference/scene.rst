.. _api_Scene:
Scene Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_Scene_description:
Description
-----------

A root object in the scene graph hierarchy.

Note: A scene object creating automatically by the engine. Only one Scene instance can be created in the game. A scene object must be set as a parent for other game hierarchies to show them on the screen. The main scene object can be retrieved using Engine::scene()



.. _api_Scene_public:
Public Methods
--------------

+-----------------------+--------------------------------------------------------------+
|                       | :ref:`Scene<api_Scene_Scene>` ()                             |
+-----------------------+--------------------------------------------------------------+
|                       | :ref:`~Scene<api_Scene_~Scene>` ()                           |
+-----------------------+--------------------------------------------------------------+
| :ref:`bool<api_bool>` | :ref:`isDirty<api_Scene_isDirty>` ()                         |
+-----------------------+--------------------------------------------------------------+
| :ref:`bool<api_bool>` | :ref:`isToBeUpdated<api_Scene_isToBeUpdated>` ()             |
+-----------------------+--------------------------------------------------------------+
| :ref:`void<api_void>` | :ref:`setDirty<api_Scene_setDirty>` (bool  flag = true)      |
+-----------------------+--------------------------------------------------------------+
| :ref:`void<api_void>` | :ref:`setToBeUpdated<api_Scene_setToBeUpdated>` (bool  flag) |
+-----------------------+--------------------------------------------------------------+



.. _api_Scene_static:
Static Methods
--------------

+-------------------------------------------------------------------+--------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Scene_methods>` ()       |
+-------------------------------------------------------------------+--------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Scene_properties>` () |
+-------------------------------------------------------------------+--------------------------------------------+

.. _api_Scene_methods:
Methods Description
-------------------

.. _api_Scene_Scene:

**Scene::Scene** ()

Default constructs an instance of Scene.

----

.. _api_Scene_~Scene:

**Scene::~Scene** ()

Destroys the instance of Scene. The destructor is virtual.

----

.. _api_Scene_isDirty:

:ref:`bool<api_bool>`  **Scene::isDirty** ()

Returns true in case of scene is dirty and must be rendered; othewise returns false.

----

.. _api_Scene_isToBeUpdated:

:ref:`bool<api_bool>`  **Scene::isToBeUpdated** ()

Returns in case of scene must be updated in the current frame; otherwise returns false.

----

.. _api_Scene_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Scene::methods** ()

----

.. _api_Scene_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Scene::properties** ()

----

.. _api_Scene_setDirty:

:ref:`void<api_void>`  **Scene::setDirty** (:ref:`bool<api_bool>`  *flag* = true)

Sets a dirty *flag*.

**See also** isDirty().

----

.. _api_Scene_setToBeUpdated:

:ref:`void<api_void>`  **Scene::setToBeUpdated** (:ref:`bool<api_bool>`  *flag*)

Sets an update *flag*.

**See also** isToBeUpdated().

----


